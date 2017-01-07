/**
 * @param {string} str
 * @param {number} count
 * @returns {string}
 */
const repeat:Function = (str:string, count:number):string => {
    if (0 > count) {
        throw new Error(`Count must be a positive number, "${count}" given.`);
    }

    // the count is always one extra, with join two parts become one
    return new Array(Math.floor(count) + 1).join(str);
};

export {repeat};
