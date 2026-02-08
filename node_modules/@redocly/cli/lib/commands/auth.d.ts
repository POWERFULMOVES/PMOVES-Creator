import type { CommandArgs } from '../wrapper.js';
export type LoginArgv = {
    residency?: string;
    config?: string;
    verbose?: boolean;
};
export declare function handleLogin({ argv, config }: CommandArgs<LoginArgv>): Promise<void>;
export type LogoutArgv = {
    config?: string;
};
export declare function handleLogout(): Promise<void>;
//# sourceMappingURL=auth.d.ts.map