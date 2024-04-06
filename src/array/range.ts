export const arrayRange = (start: number, stop: number, step: number = 1): number[] =>
    Array.from({length: Math.floor((stop - start) / step) + 1}, (_, index) => start + index * step);