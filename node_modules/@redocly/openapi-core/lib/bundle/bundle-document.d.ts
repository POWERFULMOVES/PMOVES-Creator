import type { Config } from '../config/config.js';
import type { NormalizedNodeType, NodeType } from '../types/index.js';
import type { NormalizedProblem } from '../walk.js';
import type { Document, BaseResolver } from '../resolve.js';
export type CoreBundleOptions = {
    externalRefResolver?: BaseResolver;
    config: Config;
    dereference?: boolean;
    base?: string | null;
    removeUnusedComponents?: boolean;
    keepUrlRefs?: boolean;
};
export type BundleResult = {
    bundle: Document;
    problems: NormalizedProblem[];
    fileDependencies: Set<string>;
    rootType: NormalizedNodeType;
    refTypes?: Map<string, NormalizedNodeType>;
    visitorsData: Record<string, Record<string, unknown>>;
};
export declare function bundleDocument(opts: {
    document: Document;
    config: Config;
    types: Record<string, NodeType>;
    externalRefResolver: BaseResolver;
    dereference?: boolean;
    removeUnusedComponents?: boolean;
    keepUrlRefs?: boolean;
}): Promise<BundleResult>;
//# sourceMappingURL=bundle-document.d.ts.map