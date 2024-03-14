import Fibonacci from "./models/Fibonacci_model";
import * as promptSync from "./node_modules/prompt-sync";

const prompt = promptSync();

const position = new Fibonacci(1, 5);

let input:any = prompt('entre com o valor: ');
for( let i = 1 ; i <= input ; i++){
    console.log(position.Fibonacci(i))
}
