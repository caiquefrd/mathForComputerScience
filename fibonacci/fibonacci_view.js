"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fibonacci_model_1 = require("./models/Fibonacci_model");
var promptSync = require("./node_modules/prompt-sync");
var Log_1 = require("./functions/Log");
var prompt = promptSync();
var input = prompt('Entre com o a posição: ');
var position = new Fibonacci_model_1.default(1, input);
(0, Log_1.default)(input, position);
