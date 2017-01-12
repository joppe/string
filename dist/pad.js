System.register(["./repeat"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var string, padType, pad;
    return {
        setters: [
            function (string_1) {
                string = string_1;
            }
        ],
        execute: function () {
            (function (padType) {
                padType[padType["Left"] = 0] = "Left";
                padType[padType["Right"] = 1] = "Right";
            })(padType || (padType = {}));
            exports_1("padType", padType);
            exports_1("pad", pad = function (input, char, length, type) {
                if (type === void 0) { type = padType.Left; }
                var output = input.toString();
                if (output.length < length) {
                    var count = length - output.length;
                    var affix = string.repeat(char, count);
                    if (padType.Left === type) {
                        output = affix + output;
                    }
                    else if (padType.Right === type) {
                        output += affix;
                    }
                }
                return output;
            });
        }
    };
});
//# sourceMappingURL=pad.js.map