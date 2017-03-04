"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string = require("./repeat");
var PadType;
(function (PadType) {
    PadType[PadType["Left"] = 0] = "Left";
    PadType[PadType["Right"] = 1] = "Right";
})(PadType = exports.PadType || (exports.PadType = {}));
exports.pad = (input, char, length, type = PadType.Right) => {
    let output = input.toString();
    if (output.length < length) {
        const count = length - output.length;
        const affix = string.repeat(char, count);
        if (PadType.Left === type) {
            output = affix + output;
        }
        else if (PadType.Right === type) {
            output += affix;
        }
    }
    return output;
};
//# sourceMappingURL=pad.js.map