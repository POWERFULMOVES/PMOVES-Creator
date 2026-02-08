import { Client, ProxyAgent, fetch } from 'undici';
export type MtlsCerts = {
    clientCert?: string;
    clientKey?: string;
    caCert?: string;
};
export type MtlsPerDomainCerts = {
    [domain: string]: MtlsCerts;
};
export declare function createNetworkDispatcher(parsedPathToFetch: string, mtlsCerts?: MtlsCerts): ProxyAgent | Client | undefined;
export declare function withConnectionClient(perDomainCerts?: MtlsPerDomainCerts): typeof fetch;
//# sourceMappingURL=connection-client.d.ts.map