export function genericFilter<T>(
    objects: T[],
    properties: Array<keyof T>,
    queries: Array<string>[] | Array<number>[]
): T[] {
    return objects.filter((object) => {
        let count = 0;
        properties.some((props) => {
            const objectValue = object[props]
            if (typeof objectValue === "string" || typeof objectValue === "number") {
                queries.forEach((query) => {
                    query.forEach((queryValue) => {
                        if (queryValue === objectValue) {
                            count += 1;
                        }
                    })
                })
            }
        })
        return count === properties.length;
    })
}

export const intersection = async (
    arr1: any[],
    arr2: any[],
) => {
    return arr1.filter(x => arr2.includes(x));
}