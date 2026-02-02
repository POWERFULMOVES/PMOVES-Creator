import { type NodeType } from './index.js';
export declare const Oas3_2Types: {
    readonly Root: NodeType;
    readonly Tag: NodeType;
    readonly Server: NodeType;
    readonly SecurityScheme: NodeType;
    readonly OAuth2Flows: NodeType;
    readonly DeviceAuthorization: NodeType;
    readonly PathItem: NodeType;
    readonly Parameter: NodeType;
    readonly Response: Omit<NodeType, "required">;
    readonly MediaType: NodeType;
    readonly Discriminator: NodeType;
    readonly Example: NodeType;
    readonly Xml: NodeType;
    readonly Schema: NodeType;
    readonly Info: NodeType;
    readonly SchemaProperties: NodeType;
    readonly PatternProperties: NodeType;
    readonly License: NodeType;
    readonly Components: NodeType;
    readonly NamedPathItems: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly Operation: NodeType;
    readonly DependentRequired: NodeType;
    readonly TagList: {
        name: string;
        properties: {};
        items: string;
    };
    readonly TagGroups: {
        name: string;
        properties: {};
        items: string;
    };
    readonly TagGroup: NodeType;
    readonly ExternalDocs: NodeType;
    readonly ServerList: {
        name: string;
        properties: {};
        items: string;
    };
    readonly ServerVariable: NodeType;
    readonly ServerVariablesMap: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly SecurityRequirement: NodeType;
    readonly SecurityRequirementList: {
        name: string;
        properties: {};
        items: string;
    };
    readonly Contact: NodeType;
    readonly Paths: NodeType;
    readonly ParameterList: {
        name: string;
        properties: {};
        items: string;
    };
    readonly Callback: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly CallbacksMap: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly RequestBody: NodeType;
    readonly MediaTypesMap: NodeType;
    readonly ExamplesMap: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly Encoding: NodeType;
    readonly EncodingMap: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly EnumDescriptions: NodeType;
    readonly Header: NodeType;
    readonly HeadersMap: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly Responses: NodeType;
    readonly Link: NodeType;
    readonly Logo: NodeType;
    readonly DiscriminatorMapping: NodeType;
    readonly LinksMap: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly NamedSchemas: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly NamedResponses: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly NamedParameters: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly NamedExamples: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly NamedRequestBodies: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly NamedHeaders: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly NamedSecuritySchemes: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly NamedLinks: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly NamedCallbacks: {
        name: string;
        properties: {};
        additionalProperties: () => string;
    };
    readonly ImplicitFlow: NodeType;
    readonly PasswordFlow: NodeType;
    readonly ClientCredentials: NodeType;
    readonly AuthorizationCode: NodeType;
    readonly XCodeSample: NodeType;
    readonly XCodeSampleList: {
        name: string;
        properties: {};
        items: string;
    };
    readonly XUsePkce: NodeType;
    readonly WebhooksMap: NodeType;
};
//# sourceMappingURL=oas3_2.d.ts.map