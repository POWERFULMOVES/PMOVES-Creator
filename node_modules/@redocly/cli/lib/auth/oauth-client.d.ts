export declare class RedoclyOAuthClient {
    readonly credentialsFolderPath: string;
    readonly credentialsFilePath: string;
    readonly credentialsFileName: string;
    private readonly key;
    private readonly iv;
    constructor();
    login(baseUrl: string): Promise<void>;
    logout(): Promise<void>;
    isAuthorized(reuniteUrl: string, apiKey?: string): Promise<boolean>;
    getAccessToken: (reuniteUrl: string) => Promise<string | null>;
    private saveCredentials;
    private readCredentials;
    private removeCredentials;
    private encryptCredentials;
    private decryptCredentials;
}
//# sourceMappingURL=oauth-client.d.ts.map