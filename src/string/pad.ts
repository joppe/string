import * as string from './repeat';

export enum Direction {
    Left,
    Right
}

/**
 * Put a character in front (or at the end) of a string.
 *
 * The technique used is to create an array of fixed length and join the (empty) parts together
 * with the provided char.
 *
 * @param {string} source
 * @param {string} char
 * @param {number} length
 * @param {number} [type]
 * @returns {string}
 */
export const pad:Function = (source:string, char:string, length:number, type:number = Direction.Left):string => {
    let target:string = source.toString();

    // guard: stop if the given string is already of the desired length
    if (target.length >= length) {
        return target;
    }

    const count:number = length - target.length;
    const affix:string = string.repeat(char, count);

    if (Direction.Left === type) {
        target = affix + target;
    } else if (Direction.Right === type) {
        target += affix;
    }

    return target;
};
