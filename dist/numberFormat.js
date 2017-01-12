System.register(["./reverse"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var string, THREE_DIGITS, numberFormat;
    return {
        setters: [
            function (string_1) {
                string = string_1;
            }
        ],
        execute: function () {
            THREE_DIGITS = /(\d{3})/g;
            exports_1("numberFormat", numberFormat = function (input, decimalCount, decimalPoint, thousandsSeperator) {
                if (decimalCount === void 0) { decimalCount = 2; }
                if (decimalPoint === void 0) { decimalPoint = '.'; }
                if (thousandsSeperator === void 0) { thousandsSeperator = ','; }
                var str = input.toFixed(decimalCount);
                var _a = str.split('.'), integer = _a[0], fraction = _a[1];
                var reversedInteger = string.reverse(integer);
                var reversedSeparatedInteger = reversedInteger.replace(THREE_DIGITS, function (match) {
                    return "" + match + thousandsSeperator;
                });
                return "" + string.reverse(reversedSeparatedInteger) + decimalPoint + fraction;
            });
        }
    };
});
//# sourceMappingURL=numberFormat.js.map