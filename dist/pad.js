"use strict";
var string = require("./repeat");
var PadType;
(function (PadType) {
    PadType[PadType["Left"] = 0] = "Left";
    PadType[PadType["Right"] = 1] = "Right";
})(PadType = exports.PadType || (exports.PadType = {}));
exports.pad = function (input, char, length, type) {
    if (type === void 0) { type = PadType.Right; }
    var output = input.toString();
    if (output.length < length) {
        var count = length - output.length;
        var affix = string.repeat(char, count);
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