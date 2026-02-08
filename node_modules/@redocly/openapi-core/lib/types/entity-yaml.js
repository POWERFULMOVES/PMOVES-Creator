import { getNodeTypesFromJSONSchema } from './json-schema-adapter.js';
import { isPlainObject } from '../utils/is-plain-object.js';
export const ENTITY_DISCRIMINATOR_NAME = 'type';
export function createEntityTypes(entitySchema, entityDefaultSchema) {
    const defaultNodeTypes = getNodeTypesFromJSONSchema('EntityFileDefault', entityDefaultSchema);
    const namedNodeTypes = getNodeTypesFromJSONSchema('EntityFile', entitySchema);
    const arrayNodeType = {
        properties: {},
        items: (value) => {
            if (isPlainObject(value)) {
                const typeValue = value[ENTITY_DISCRIMINATOR_NAME];
                if (typeof typeValue === 'string' && namedNodeTypes[typeValue]) {
                    return typeValue;
                }
            }
            return 'EntityFileDefault';
        },
    };
    return {
        ...defaultNodeTypes,
        ...namedNodeTypes,
        EntityFileArray: arrayNodeType,
    };
}
//# sourceMappingURL=entity-yaml.js.map