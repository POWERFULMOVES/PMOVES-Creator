export const SpecDiscriminatorDefaultMapping = () => {
    let componentsSchemaNames;
    return {
        NamedSchemas: {
            enter(schemas) {
                componentsSchemaNames = Object.keys(schemas);
            },
        },
        Schema: {
            leave(schema, ctx) {
                if (!schema.discriminator?.propertyName)
                    return;
                const defaultMapping = schema.discriminator.defaultMapping;
                const isPropertyOptional = !schema.required?.includes(schema.discriminator.propertyName);
                if (isPropertyOptional && defaultMapping === undefined) {
                    ctx.report({
                        message: `Discriminator with optional property '${schema.discriminator.propertyName}' must include a defaultMapping field.`,
                        location: ctx.location.child('discriminator'),
                    });
                    return;
                }
                if (defaultMapping !== undefined && !componentsSchemaNames.includes(defaultMapping)) {
                    ctx.report({
                        message: `defaultMapping value '${defaultMapping}' does not point to an existing schema component.`,
                        location: ctx.location.child(['discriminator', 'defaultMapping']),
                    });
                }
            },
        },
    };
};
//# sourceMappingURL=spec-discriminator-defaultMapping.js.map