import * as path from 'node:path';
import * as fs from 'node:fs';
export function doesYamlFileExist(filePath) {
    return ((path.extname(filePath) === '.yaml' || path.extname(filePath) === '.yml') &&
        !!fs?.existsSync?.(filePath));
}
//# sourceMappingURL=does-yaml-file-exist.js.map