import { type Config } from '@redocly/openapi-core';
export declare const REUNITE_URLS: {
    readonly us: "https://app.cloud.redocly.com";
    readonly eu: "https://app.cloud.eu.redocly.com";
};
export declare function getDomain(): string;
export declare const getReuniteUrl: (config: Config | undefined, residencyOption?: string | undefined) => string;
export declare function isValidReuniteUrl(reuniteUrl: string): boolean;
export declare class InvalidReuniteUrlError extends Error {
    constructor();
}
//# sourceMappingURL=domains.d.ts.map