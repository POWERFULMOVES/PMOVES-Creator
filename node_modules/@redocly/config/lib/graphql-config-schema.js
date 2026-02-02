"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlConfigSchema = void 0;
const feedback_config_schema_1 = require("./feedback-config-schema");
const redoc_config_schema_1 = require("./redoc-config-schema");
const typeGroupConfig = {
    type: 'object',
    properties: {
        includeByName: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
        excludeByName: {
            type: 'array',
            items: {
                type: 'string',
            },
        },
    },
    additionalProperties: false,
};
const menuGroupConfig = {
    type: 'object',
    properties: {
        name: {
            type: 'string',
        },
        items: typeGroupConfig,
        queries: typeGroupConfig,
        mutations: typeGroupConfig,
        subscriptions: typeGroupConfig,
        types: typeGroupConfig,
        directives: typeGroupConfig,
    },
    required: ['name'],
    additionalProperties: false,
};
const menuGroupingConfig = {
    type: 'object',
    properties: {
        requireExactGroups: {
            type: 'boolean',
        },
        groups: {
            type: 'array',
            items: menuGroupConfig,
        },
        otherItemsGroupName: {
            type: 'string',
        },
    },
    required: ['requireExactGroups', 'groups', 'otherItemsGroupName'],
    additionalProperties: false,
};
const graphqlContactConfigSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        url: { type: 'string', format: 'uri' },
        email: { type: 'string', format: 'email' },
    },
    additionalProperties: false,
};
const graphqlLicenseConfigSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        url: { type: 'string', format: 'uri' },
        identifier: { type: 'string' },
    },
    additionalProperties: false,
};
const graphqlInfoConfigSchema = {
    type: 'object',
    properties: {
        title: { type: 'string' },
        version: { type: 'string' },
        description: { type: 'string' },
        termsOfService: { type: 'string', format: 'uri' },
        contact: graphqlContactConfigSchema,
        license: graphqlLicenseConfigSchema,
    },
    additionalProperties: false,
};
exports.graphqlConfigSchema = {
    type: 'object',
    properties: {
        menu: {
            type: 'object',
            properties: Object.assign({}, menuGroupingConfig.properties),
            additionalProperties: false,
        },
        sidebar: {
            type: 'object',
            properties: {
                hide: {
                    type: 'boolean',
                },
            },
        },
        downloadUrls: redoc_config_schema_1.downloadUrlsSchema,
        apiLogo: {
            type: 'object',
            properties: {
                imageUrl: {
                    type: 'string',
                },
                href: {
                    type: 'string',
                },
                altText: {
                    type: 'string',
                },
                backgroundColor: {
                    type: 'string',
                },
            },
        },
        jsonSamplesDepth: {
            type: 'number',
        },
        samplesMaxInlineArgs: {
            type: 'number',
        },
        licenseKey: {
            type: 'string',
        },
        fieldExpandLevel: {
            type: 'number',
        },
        baseUrlPath: {
            type: 'string',
        },
        metadata: {
            type: 'object',
            properties: {
                apiId: {
                    type: 'string',
                },
            },
            additionalProperties: true,
        },
        feedback: feedback_config_schema_1.feedbackConfigSchema,
        layout: { type: 'string', enum: ['stacked', 'three-panel'] },
        showBuiltInScalars: {
            type: 'boolean',
        },
        showBuiltInDirectives: {
            type: 'boolean',
        },
        info: graphqlInfoConfigSchema,
    },
    additionalProperties: false,
};
//# sourceMappingURL=graphql-config-schema.js.map