/**
 * This function reverses the order of the characters in a string.
 */

export type ReverseFunction= (input: string) => string;

export const reverse: ReverseFunction = (input: string): string => {
    return input.split('').reverse().join('');
};
