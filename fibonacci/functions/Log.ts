import Fibonacci from "../models/Fibonacci_model";

function Log(input:number, position:Fibonacci){
    for( let i = 0 ; i < input ; i ++ ){
        if ( i == position.initTerm || i == position.initTerm - 1  ){
            console.log(`${position.Fibonacci(i)} é o caso base `)
        }
        else {
            console.log(`a posição ${position.Fibonacci(i)} é a soma de ${position.Fibonacci(i - 1)} + ${position.Fibonacci(i - 2)} `)
        }
    };
}


export default Log