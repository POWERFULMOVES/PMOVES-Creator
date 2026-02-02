import { BaseResolver } from '../resolve.js';
import { type Config } from '../config/config.js';
import type { Plugin, ResolvedConfig } from '../config/types.js';
import type { NormalizedNodeType } from '../types/index.js';
import type { NormalizedProblem } from '../walk.js';
import type { Document, ResolvedRefMap } from '../resolve.js';
import type { CollectFn } from '../utils/types.js';
export type CoreBundleOptions = {
    externalRefResolver?: BaseResolver;
    config: Config;
    dereference?: boolean;
    base?: string | null;
    removeUnusedComponents?: boolean;
    keepUrlRefs?: boolean;
};
export declare function collectConfigPlugins(document: Document, resolvedRefMap: ResolvedRefMap, rootConfigDir: string): (Plugin | import("../config/config-resolvers.js").PluginResolveInfo)[];
export declare function bundleConfig(document: Document, resolvedRefMap: ResolvedRefMap, plugins: Plugin[]): ResolvedConfig;
export declare function bundle(opts: {
    ref?: string;
    doc?: Document;
    collectSpecData?: CollectFn;
} & CoreBundleOptions): Promise<import("./bundle-document.js").BundleResult>;
export declare function bundleFromString(opts: {
    source: string;
    absoluteRef?: string;
} & CoreBundleOptions): Promise<import("./bundle-document.js").BundleResult>;
export type BundleResult = {
    bundle: Document;
    problems: NormalizedProblem[];
    fileDependencies: Set<string>;
    rootType: NormalizedNodeType;
    refTypes?: Map<string, NormalizedNodeType>;
    visitorsData: Record<string, Record<string, unknown>>;
};
//# sourceMappingURL=bundle.d.ts.map