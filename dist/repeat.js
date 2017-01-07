System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var repeat;
    return {
        setters: [],
        execute: function () {
            repeat = (str, count) => {
                if (0 > count) {
                    throw new Error(`Count must be a positive number, "${count}" given.`);
                }
                return new Array(Math.floor(count) + 1).join(str);
            };
            exports_1("repeat", repeat);
        }
    };
});
//# sourceMappingURL=repeat.js.map