export const trim = (value: string) => {
    return value
        .replace(/\r\n/g, '')
        .replace(/\n/g, '')
        .replace(/\n\n/g, '')
        .replace(/\t/gy, '')
        .trimStart()
        .trimEnd()
        .trim();
}