export function validateMountPath(value) {
    if (!value || value === '/') {
        throw new Error('Mount path cannot be empty or root path. Please use --mount-path option with a valid path.');
    }
    return value;
}
//# sourceMappingURL=validate-mount-path.js.map