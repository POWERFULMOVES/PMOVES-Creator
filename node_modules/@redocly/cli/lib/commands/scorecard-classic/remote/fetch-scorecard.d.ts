import type { RemoteScorecardAndPlugins } from '../types.js';
export type FetchRemoteScorecardAndPluginsParams = {
    projectUrl: string;
    auth: string;
    isApiKey?: boolean;
    verbose?: boolean;
};
export declare function fetchRemoteScorecardAndPlugins({ projectUrl, auth, isApiKey, verbose, }: FetchRemoteScorecardAndPluginsParams): Promise<RemoteScorecardAndPlugins>;
//# sourceMappingURL=fetch-scorecard.d.ts.map