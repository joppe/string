System.register(["./repeat"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var string, Direction, pad;
    return {
        setters: [
            function (string_1) {
                string = string_1;
            }
        ],
        execute: function () {
            (function (Direction) {
                Direction[Direction["Left"] = 0] = "Left";
                Direction[Direction["Right"] = 1] = "Right";
            })(Direction || (Direction = {}));
            exports_1("Direction", Direction);
            exports_1("pad", pad = (source, char, length, type = Direction.Left) => {
                let target = source.toString();
                if (target.length >= length) {
                    return target;
                }
                const count = length - target.length;
                const affix = string.repeat(char, count);
                if (Direction.Left === type) {
                    target = affix + target;
                }
                else if (Direction.Right === type) {
                    target += affix;
                }
                return target;
            });
        }
    };
});
//# sourceMappingURL=pad.js.map