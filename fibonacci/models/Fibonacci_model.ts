class Calcthis {
    initTerm:number
    nthis:number
    constructor(initTerm:number, nthis:number){
        this.initTerm = initTerm;
        this.nthis = nthis
    }
    Fibonacci(nthis: number): number {
        if (nthis <= 1) {
            return this.initTerm;
          } else {
              return this.Fibonacci(nthis - 1) + this.Fibonacci(nthis - 2)
          }
    }
    Log(input:number):any{
      for( let i = 0 ; i < input ; i ++ ){
        if ( i == this.initTerm || i == this.initTerm - 1  ){
            return console.log(`${this.Fibonacci(i)} é o caso base `)
        }
        else {
            return console.log(`a posição ${this.Fibonacci(i)} é a soma de ${this.Fibonacci(i - 1)} + ${this.Fibonacci(i - 2)} `)
        }
    };
    }
}


export default Calcthis


/* 
A sequência de Fibonacci é definida da seguinte forma: {1, 1, 2, 3, 5, 8, 13, ...}, ou seja,
para k>2, xk = xk-1 + xk-2. Utilizando uma linguagem de programação com suporte a orientação a
objetos, defina uma classe que modele a sequência de Fibonacci e exemplifique o cálculo de
alguns de seus termos. Ilustre a chamada recursiva e identifique chamadas repetidas a um
mesmo valor construindo uma árvore de chamadas.
 */