export type Credentials = {
    access_token: string;
    refresh_token: string;
    expires_in: number;
    residency?: string;
    token_type?: string;
};
export declare class RedoclyOAuthDeviceFlow {
    private baseUrl;
    private apiClient;
    private clientName;
    constructor(baseUrl: string);
    run(): Promise<Credentials>;
    private openBrowser;
    verifyToken(accessToken: string): Promise<boolean>;
    verifyApiKey(apiKey: string): Promise<boolean>;
    refreshToken(refreshToken?: string): Promise<Credentials>;
    private pollingAccessToken;
    private getAccessToken;
    private getDeviceCode;
    private sendRequest;
    private withResidency;
}
//# sourceMappingURL=device-flow.d.ts.map