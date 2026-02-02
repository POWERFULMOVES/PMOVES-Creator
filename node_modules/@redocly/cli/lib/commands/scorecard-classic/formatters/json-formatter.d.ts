import type { ScorecardProblem } from '../types.js';
type ScorecardLevel = {
    name: string;
    total: {
        errors: number;
        warnings: number;
    };
    problems: Array<{
        ruleId: string;
        ruleUrl?: string;
        severity: string;
        message: string;
        location: {
            file: string;
            range: string;
            pointer?: string;
        }[];
    }>;
};
export type ScorecardJsonOutput = {
    version: string;
    level?: string;
    levels: ScorecardLevel[];
};
export declare function printScorecardResultsAsJson(problems: ScorecardProblem[], achievedLevel: string, targetLevelAchieved: boolean, version?: string): void;
export {};
//# sourceMappingURL=json-formatter.d.ts.map