/**
 * Return the given string with the first character capitalized.
 */

export function ucfirst(input: string): string {
    if (input.length === 0) {
        return input;
    }

    // tslint:disable-next-line newline-per-chained-call
    return `${input.charAt(0).toUpperCase()}${input.slice(1)}`;
}
