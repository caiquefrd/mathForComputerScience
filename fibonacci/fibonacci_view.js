"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fibonacci_model_1 = require("./models/Fibonacci_model");
var promptSync = require("./node_modules/prompt-sync");
var prompt = promptSync();
var input = prompt('Entre com o valor: ');
var position = new Fibonacci_model_1.default(1, input);
for (var i = 0; i < input; i++) {
    if (i == position.initTerm || i == position.initTerm - 1) {
        console.log("".concat(position.Fibonacci(i), " \u00E9 o caso base "));
    }
    else {
        console.log("a posi\u00E7\u00E3o ".concat(position.Fibonacci(i), " \u00E9 a soma de ").concat(position.Fibonacci(i - 1), " + ").concat(position.Fibonacci(i - 2), " "));
    }
}
;
