"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calcthis = /** @class */ (function () {
    function Calcthis(initTerm, nthis) {
        this.initTerm = initTerm;
        this.nthis = nthis;
    }
    Calcthis.prototype.Fibonacci = function (nthis) {
        if (nthis <= 1) {
            return this.initTerm;
        }
        else {
            return this.Fibonacci(nthis - 1) + this.Fibonacci(nthis - 2);
        }
    };
    Calcthis.prototype.Log = function (input) {
        for (var i = 0; i < input; i++) {
            if (i == this.initTerm || i == this.initTerm - 1) {
                return console.log("".concat(this.Fibonacci(i), " \u00E9 o caso base "));
            }
            else {
                return console.log("a posi\u00E7\u00E3o ".concat(this.Fibonacci(i), " \u00E9 a soma de ").concat(this.Fibonacci(i - 1), " + ").concat(this.Fibonacci(i - 2), " "));
            }
        }
        ;
    };
    return Calcthis;
}());
exports.default = Calcthis;
/*
A sequência de Fibonacci é definida da seguinte forma: {1, 1, 2, 3, 5, 8, 13, ...}, ou seja,
para k>2, xk = xk-1 + xk-2. Utilizando uma linguagem de programação com suporte a orientação a
objetos, defina uma classe que modele a sequência de Fibonacci e exemplifique o cálculo de
alguns de seus termos. Ilustre a chamada recursiva e identifique chamadas repetidas a um
mesmo valor construindo uma árvore de chamadas.
 */ 
