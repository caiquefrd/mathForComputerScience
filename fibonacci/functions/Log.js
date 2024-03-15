"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Log(input, position) {
    for (var i = 0; i < input; i++) {
        if (i == position.initTerm || i == position.initTerm - 1) {
            console.log("".concat(position.Fibonacci(i), " \u00E9 o caso base "));
        }
        else {
            console.log("a posi\u00E7\u00E3o ".concat(position.Fibonacci(i), " \u00E9 a soma de ").concat(position.Fibonacci(i - 1), " + ").concat(position.Fibonacci(i - 2), " "));
        }
    }
    ;
}
exports.default = Log;
