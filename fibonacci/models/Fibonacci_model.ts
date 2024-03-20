class CalcFibonacci {
    initTerm:number
    nInput:number
    constructor(initTerm:number, nInput:number){
        this.initTerm = initTerm;
        this.nInput = nInput
    }
    Fibonacci(nPosition: number): number {
        if (nPosition <= 1) {
            return this.initTerm;
          } else {
              return this.Fibonacci(nPosition - 1) + this.Fibonacci(nPosition - 2)
          }
    }
}


export default CalcFibonacci


/* 
A sequência de Fibonacci é definida da seguinte forma: {1, 1, 2, 3, 5, 8, 13, ...}, ou seja,
para k>2, xk = xk-1 + xk-2. Utilizando uma linguagem de programação com suporte a orientação a
objetos, defina uma classe que modele a sequência de Fibonacci e exemplifique o cálculo de
alguns de seus termos. Ilustre a chamada recursiva e identifique chamadas repetidas a um
mesmo valor construindo uma árvore de chamadas.
 */