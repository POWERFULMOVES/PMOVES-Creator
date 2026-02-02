import type { JSONSchema } from 'json-schema-to-ts';
import type { NodeType } from './index.js';
export declare const ENTITY_DISCRIMINATOR_NAME = "type";
export declare function createEntityTypes(entitySchema: JSONSchema, entityDefaultSchema: JSONSchema): Record<string, NodeType>;
//# sourceMappingURL=entity-yaml.d.ts.map