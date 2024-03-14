class CalcPosition {
    initTerm:number
    nPosition:number
    constructor(initTerm:number, nPosition:number){
        this.initTerm = initTerm;
        this.nPosition = nPosition
    }
    Fibonacci(n: number): number {
        if (n <= 1) {
            return n;
          } else {
            return this.Fibonacci(n - 1) + this.Fibonacci(n - 2);
          }
    }
}


export default CalcPosition


/* 
A sequência de Fibonacci é definida da seguinte forma: {1, 1, 2, 3, 5, 8, 13, ...}, ou seja,
para k>2, xk = xk-1 + xk-2. Utilizando uma linguagem de programação com suporte a orientação a
objetos, defina uma classe que modele a sequência de Fibonacci e exemplifique o cálculo de
alguns de seus termos. Ilustre a chamada recursiva e identifique chamadas repetidas a um
mesmo valor construindo uma árvore de chamadas.
 */