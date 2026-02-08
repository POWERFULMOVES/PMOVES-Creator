import type { Source } from '../resolve';
export declare class YamlParseError extends Error {
    originalError: Error;
    source: Source;
    col: number;
    line: number;
    constructor(originalError: Error, source: Source);
}
//# sourceMappingURL=yaml-parse-error.d.ts.map