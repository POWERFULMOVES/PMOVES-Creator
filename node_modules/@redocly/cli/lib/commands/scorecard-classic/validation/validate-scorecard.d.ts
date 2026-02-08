import type { ScorecardConfig } from '@redocly/config';
import type { Document, Plugin, BaseResolver } from '@redocly/openapi-core';
import type { ScorecardProblem } from '../types.js';
export type ScorecardValidationResult = {
    problems: ScorecardProblem[];
    achievedLevel: string;
    targetLevelAchieved: boolean;
};
export type ValidateScorecardParams = {
    document: Document;
    externalRefResolver: BaseResolver;
    scorecardConfig: ScorecardConfig;
    configPath?: string;
    pluginsCodeOrPlugins?: string | Plugin[];
    targetLevel?: string;
    verbose?: boolean;
};
export declare function validateScorecard({ document, externalRefResolver, scorecardConfig, configPath, pluginsCodeOrPlugins, targetLevel, verbose, }: ValidateScorecardParams): Promise<ScorecardValidationResult>;
//# sourceMappingURL=validate-scorecard.d.ts.map