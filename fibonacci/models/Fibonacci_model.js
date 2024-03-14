"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CalcPosition = /** @class */ (function () {
    function CalcPosition(initTerm, nPosition) {
        this.initTerm = initTerm;
        this.nPosition = nPosition;
    }
    CalcPosition.prototype.Fibonacci = function (n) {
        if (n <= 1) {
            return this.initTerm;
        }
        else {
            return this.Fibonacci(n - 1) + this.Fibonacci(n - 2);
        }
    };
    return CalcPosition;
}());
exports.default = CalcPosition;
/*
A sequência de Fibonacci é definida da seguinte forma: {1, 1, 2, 3, 5, 8, 13, ...}, ou seja,
para k>2, xk = xk-1 + xk-2. Utilizando uma linguagem de programação com suporte a orientação a
objetos, defina uma classe que modele a sequência de Fibonacci e exemplifique o cálculo de
alguns de seus termos. Ilustre a chamada recursiva e identifique chamadas repetidas a um
mesmo valor construindo uma árvore de chamadas.
 */
