"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.entitiesCatalogConfigSchema = exports.entityCatalogEntityTypesSchema = exports.entityCatalogEntityTypeSchema = exports.entityCatalogMetadataSchema = exports.entityCatalogMetadataSchemaPropertySchema = exports.entityCatalogSpecificCatalogSchema = exports.entityCatalogFilterSchema = exports.entityCatalogIncludeSchema = exports.entityCatalogExcludeSchema = void 0;
exports.entityCatalogExcludeSchema = {
    type: 'object',
    required: ['key'],
    properties: {
        key: { type: 'string' },
    },
    additionalProperties: false,
};
exports.entityCatalogIncludeSchema = {
    type: 'object',
    required: ['type'],
    properties: {
        type: { type: 'string' },
    },
    additionalProperties: false,
};
exports.entityCatalogFilterSchema = {
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
exports.entityCatalogSpecificCatalogSchema = {
    type: 'object',
    properties: {
        slug: { type: 'string' },
        hide: { type: 'boolean' },
        includes: {
            type: 'array',
            items: exports.entityCatalogIncludeSchema,
        },
        excludes: {
            type: 'array',
            items: exports.entityCatalogExcludeSchema,
        },
        filters: {
            type: 'array',
            items: exports.entityCatalogFilterSchema,
        },
        titleTranslationKey: { type: 'string' },
        descriptionTranslationKey: { type: 'string' },
        catalogSwitcherLabelTranslationKey: { type: 'string' },
    },
    additionalProperties: false,
};
exports.entityCatalogMetadataSchemaPropertySchema = {
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
exports.entityCatalogMetadataSchema = {
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
            additionalProperties: exports.entityCatalogMetadataSchemaPropertySchema,
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
exports.entityCatalogEntityTypeSchema = {
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
        metadataSchema: exports.entityCatalogMetadataSchema,
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
exports.entityCatalogEntityTypesSchema = {
    type: 'object',
    additionalProperties: exports.entityCatalogEntityTypeSchema,
};
exports.entitiesCatalogConfigSchema = {
    type: 'object',
    properties: {
        show: { type: 'boolean', default: false },
        entityTypes: exports.entityCatalogEntityTypesSchema,
        catalogs: {
            type: 'object',
            properties: {
                all: exports.entityCatalogSpecificCatalogSchema,
                services: exports.entityCatalogSpecificCatalogSchema,
                domains: exports.entityCatalogSpecificCatalogSchema,
                teams: exports.entityCatalogSpecificCatalogSchema,
                users: exports.entityCatalogSpecificCatalogSchema,
                apiDescriptions: exports.entityCatalogSpecificCatalogSchema,
                dataSchemas: exports.entityCatalogSpecificCatalogSchema,
                apiOperations: exports.entityCatalogSpecificCatalogSchema,
            },
            additionalProperties: exports.entityCatalogSpecificCatalogSchema,
        },
    },
    additionalProperties: false,
};
//# sourceMappingURL=entities-catalog-config-schema.js.map