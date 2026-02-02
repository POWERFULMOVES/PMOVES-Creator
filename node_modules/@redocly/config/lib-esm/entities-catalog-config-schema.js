export const entityCatalogExcludeSchema = {
    type: 'object',
    required: ['key'],
    properties: {
        key: { type: 'string' },
    },
    additionalProperties: false,
};
export const entityCatalogIncludeSchema = {
    type: 'object',
    required: ['type'],
    properties: {
        type: { type: 'string' },
    },
    additionalProperties: false,
};
export const entityCatalogFilterSchema = {
    type: 'object',
    required: ['property', 'title'],
    properties: {
        property: { type: 'string' },
        hide: { type: 'boolean' },
        label: { type: 'string' },
        options: {
            type: 'array',
            items: { type: 'string' },
        },
        type: {
            type: 'string',
            enum: ['select', 'checkboxes', 'date-range'],
            default: 'checkboxes',
        },
        title: { type: 'string' },
        titleTranslationKey: { type: 'string' },
        parentFilter: { type: 'string' },
        valuesMapping: { type: 'object', additionalProperties: { type: 'string' } },
    },
    additionalProperties: false,
};
export const entityCatalogSpecificCatalogSchema = {
    type: 'object',
    properties: {
        slug: { type: 'string' },
        hide: { type: 'boolean' },
        includes: {
            type: 'array',
            items: entityCatalogIncludeSchema,
        },
        excludes: {
            type: 'array',
            items: entityCatalogExcludeSchema,
        },
        filters: {
            type: 'array',
            items: entityCatalogFilterSchema,
        },
        titleTranslationKey: { type: 'string' },
        descriptionTranslationKey: { type: 'string' },
        catalogSwitcherLabelTranslationKey: { type: 'string' },
    },
    additionalProperties: false,
};
export const entityCatalogMetadataSchemaPropertySchema = {
    type: 'object',
    properties: {
        type: {
            type: 'string',
            enum: ['string', 'number', 'boolean', 'array', 'object'],
        },
        description: {
            type: 'string',
        },
        example: {
            oneOf: [
                { type: 'string' },
                { type: 'number' },
                { type: 'boolean' },
                { type: 'array' },
                { type: 'object' },
            ],
        },
        enum: {
            type: 'array',
            items: { type: 'string' },
        },
        pattern: {
            type: 'string',
        },
        format: {
            type: 'string',
        },
        minimum: {
            type: 'number',
        },
        maximum: {
            type: 'number',
        },
        items: {
            type: 'object',
        },
    },
    additionalProperties: true,
};
export const entityCatalogMetadataSchema = {
    type: 'object',
    required: ['type', 'properties'],
    properties: {
        type: {
            type: 'string',
            enum: ['object'],
        },
        description: {
            type: 'string',
        },
        properties: {
            type: 'object',
            additionalProperties: entityCatalogMetadataSchemaPropertySchema,
        },
        required: {
            type: 'array',
            items: { type: 'string' },
        },
        additionalProperties: {
            type: 'boolean',
        },
    },
    additionalProperties: true,
};
export const entityCatalogEntityTypeSchema = {
    type: 'object',
    required: ['name', 'description', 'metadataSchema'],
    properties: {
        name: {
            type: 'string',
            description: 'Display name of the entity type',
        },
        description: {
            type: 'string',
            description: 'Description of the entity type',
        },
        metadataSchema: entityCatalogMetadataSchema,
        icon: {
            type: 'object',
            properties: {
                src: {
                    type: 'string',
                },
                srcSet: {
                    type: 'string',
                },
            },
            additionalProperties: false,
        },
    },
    additionalProperties: false,
};
export const entityCatalogEntityTypesSchema = {
    type: 'object',
    additionalProperties: entityCatalogEntityTypeSchema,
};
export const entitiesCatalogConfigSchema = {
    type: 'object',
    properties: {
        show: { type: 'boolean', default: false },
        entityTypes: entityCatalogEntityTypesSchema,
        catalogs: {
            type: 'object',
            properties: {
                all: entityCatalogSpecificCatalogSchema,
                services: entityCatalogSpecificCatalogSchema,
                domains: entityCatalogSpecificCatalogSchema,
                teams: entityCatalogSpecificCatalogSchema,
                users: entityCatalogSpecificCatalogSchema,
                apiDescriptions: entityCatalogSpecificCatalogSchema,
                dataSchemas: entityCatalogSpecificCatalogSchema,
                apiOperations: entityCatalogSpecificCatalogSchema,
            },
            additionalProperties: entityCatalogSpecificCatalogSchema,
        },
    },
    additionalProperties: false,
};
//# sourceMappingURL=entities-catalog-config-schema.js.map