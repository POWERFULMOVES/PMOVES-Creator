import type { MtlsPerDomainCerts } from '../connection-client.js';
export declare function resolveMtlsCertificates(perDomainCertificates: {
    [domain: string]: {
        clientCert?: string;
        clientKey?: string;
        caCert?: string;
    };
} | undefined, workingDir: string): MtlsPerDomainCerts;
//# sourceMappingURL=resolve-mtls-certificates.d.ts.map