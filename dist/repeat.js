"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.repeat = (input, count) => {
    if (0 > count) {
        throw new Error(`Count must be a positive number, "${count}" given.`);
    }
    return new Array(Math.floor(count) + 1).join(input);
};
//# sourceMappingURL=repeat.js.map