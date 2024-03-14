"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fibonacci_model_1 = require("./models/Fibonacci_model");
var promptSync = require("./node_modules/prompt-sync");
var prompt = promptSync();
var position = new Fibonacci_model_1.default(1, 5);
var input = prompt('entre com o valor: ');
for (var i = 1; i <= input; i++) {
    console.log(position.Fibonacci(i));
}
