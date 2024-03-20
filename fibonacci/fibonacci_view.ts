import CalcFibonacci from "./models/Fibonacci_model";
import * as promptSync from "./node_modules/prompt-sync"; // necessário instalar prompt-sync "npm install prompt-sync"
import Log from "./functions/Log"

const prompt = promptSync();

let input:number = prompt('Entre com o a posição: ');

const position = new CalcFibonacci(1, input);

Log(input, position)