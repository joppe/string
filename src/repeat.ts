/**
 * Repeat a given string a number of times.
 */

export type RepeatFunction = (str: string, count: number) => string;

export const repeat: RepeatFunction = (input: string, count: number): string => {
    if (Number.isInteger(count) === false) {
        throw new Error(`Count must be an integer, ${count} given`);
    }

    if (count < 1) {
        throw new Error(`Count must be a positive number, ${count} given.`);
    }

    // the count is always one extra (with join two parts become one)
    // tslint:disable-next-line prefer-array-literal
    return new Array(Math.floor(count) + 1).join(input);
};
