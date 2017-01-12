import * as string from './reverse';

const THREE_DIGITS:RegExp = /(\d{3})/g;

/**
 * @interface NumberFormatFunctionInterface
 */
interface NumberFormatFunctionInterface {
    /**
     * @param {string} input
     * @param {number} decimalCount
     * @param {string} decimalPoint
     * @param {string} thousandsSeperator
     * @returns {string}
     */
    (input:number, decimalCount?:number, decimalPoint?:string, thousandsSeperator?:string):string;
}

/**
 * @param {string} input
 * @param {number} decimalCount
 * @param {string} decimalPoint
 * @param {string} thousandsSeperator
 * @returns {string}
 */
export const numberFormat:NumberFormatFunctionInterface = (input:number, decimalCount:number = 2, decimalPoint:string = '.', thousandsSeperator:string = ','):string => {
    const str:string = input.toFixed(decimalCount);
    const [integer, fraction]:string = str.split('.');
    const reversedInteger:string = string.reverse(integer);
    const reversedSeparatedInteger:string = reversedInteger.replace(THREE_DIGITS, (match:string):string => {
        return `${match}${thousandsSeperator}`;
    });

    return `${string.reverse(reversedSeparatedInteger)}${decimalPoint}${fraction}`;
};
