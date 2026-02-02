import { BaseResolver } from '../resolve.js';
import { Config } from '../config/config.js';
import type { Document } from '../resolve.js';
export { Source, Document } from '../resolve.js';
export type CoreBundleOptions = {
    externalRefResolver?: BaseResolver;
    config: Config;
    dereference?: boolean;
    base?: string | null;
    removeUnusedComponents?: boolean;
    keepUrlRefs?: boolean;
};
export declare function bundleOas(opts: {
    ref?: string;
    doc?: Document;
} & CoreBundleOptions): Promise<import("./bundle-document.js").BundleResult>;
export declare function createEmptyRedoclyConfig(options?: {
    configPath?: string;
    customExtends?: string[];
    externalRefResolver?: BaseResolver;
}): Config;
//# sourceMappingURL=bundle-oas.d.ts.map