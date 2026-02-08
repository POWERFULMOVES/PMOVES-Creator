import { isRef } from '../../ref-utils.js';
import { getOwn } from '../../utils/get-own.js';
export const NoRequiredSchemaPropertiesUndefined = () => {
    const parents = [];
    return {
        Schema: {
            leave(_) {
                parents.pop();
            },
            enter(schema, { location, report, resolve }) {
                parents.push(schema);
                if (!schema.required)
                    return;
                const visitedSchemas = new Set();
                const elevateProperties = (schema, from, includeFirstLevelExclusiveSchemas = true) => {
                    // Check if the schema has been visited before processing it
                    if (visitedSchemas.has(schema)) {
                        return {};
                    }
                    visitedSchemas.add(schema);
                    if (isRef(schema)) {
                        const resolved = resolve(schema, from);
                        if (!resolved.node) {
                            return {};
                        }
                        return elevateProperties(resolved.node, resolved.location?.source.absoluteRef);
                    }
                    return Object.assign({}, schema.properties, ...(schema.allOf?.map((s) => elevateProperties(s, from)) ?? []), ...(('anyOf' in schema && includeFirstLevelExclusiveSchemas
                        ? schema.anyOf?.map((s) => elevateProperties(s, from))
                        : undefined) ?? []), ...(('oneOf' in schema && includeFirstLevelExclusiveSchemas
                        ? schema.oneOf?.map((s) => elevateProperties(s, from))
                        : undefined) ?? []));
                };
                /**
                 * The index to use to lookup grand parent schemas when dealing with composed schemas.
                 * @summary The current schema should always end up with under ../anyOf/1, if we get multiple ancestors, they should always be a multiple.
                 */
                const locationLookupIndex = 2;
                const getParentSchema = (lookupIndex) => {
                    lookupIndex++;
                    if (!parents || parents.length < lookupIndex)
                        return undefined;
                    const parent = parents[parents.length - lookupIndex];
                    return parent;
                };
                const recursivelyGetParentProperties = (splitLocation, parentLookupIndex = 0) => {
                    const isMemberOfComposedType = splitLocation.length > locationLookupIndex &&
                        !isNaN(parseInt(splitLocation[splitLocation.length - 1])) &&
                        !!/(allOf|oneOf|anyOf)/.exec(splitLocation[splitLocation.length - locationLookupIndex]);
                    const parentSchema = isMemberOfComposedType
                        ? getParentSchema(++parentLookupIndex)
                        : undefined;
                    const grandParentProperties = splitLocation.length >= locationLookupIndex + locationLookupIndex
                        ? recursivelyGetParentProperties(splitLocation.slice(0, -locationLookupIndex), parentLookupIndex)
                        : {};
                    return parentSchema
                        ? {
                            ...elevateProperties(parentSchema, undefined, false),
                            ...grandParentProperties,
                        }
                        : undefined;
                };
                const allProperties = elevateProperties(schema);
                const parentProperties = recursivelyGetParentProperties(location.pointer.split('/'));
                for (const [i, requiredProperty] of schema.required.entries()) {
                    if ((!allProperties || getOwn(allProperties, requiredProperty) === undefined) &&
                        (!parentProperties || getOwn(parentProperties, requiredProperty) === undefined)) {
                        report({
                            message: `Required property '${requiredProperty}' is undefined.`,
                            location: location.child(['required', i]),
                        });
                    }
                }
            },
        },
    };
};
//# sourceMappingURL=no-required-schema-properties-undefined.js.map