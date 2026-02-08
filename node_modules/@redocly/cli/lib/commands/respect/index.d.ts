import { type CommandArgs } from '../../wrapper';
export type MtlsConfig = {
    [domain: string]: {
        clientCert?: string;
        clientKey?: string;
        caCert?: string;
    };
};
export type RespectArgv = {
    files: string[];
    input?: string;
    server?: string;
    workflow?: string[];
    skip?: string[];
    verbose?: boolean;
    'har-output'?: string;
    'json-output'?: string;
    mtls?: MtlsConfig;
    'max-steps': number;
    severity?: string;
    config?: string;
    'max-fetch-timeout': number;
    'execution-timeout': number;
    'no-secrets-masking': boolean;
};
export declare function handleRespect({ argv, config, version, collectSpecData, }: CommandArgs<RespectArgv>): Promise<void>;
//# sourceMappingURL=index.d.ts.map