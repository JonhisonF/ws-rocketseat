// function anonymous - por não receber nome da função
// function expression

// parâmetros (parameters)
// não criar palavras sem as palavras let e const
// para não ocorrer erros futuros, como por exemplo subi a palavra para 
// scope diferente

let total = 0;
const sum = function(number1, number2) {
  total = number1 + number2; 
  return total;
}

let number1 = 34;
let number2 = 25; 
// sum(number1, number2); //arguments - argumentos

console.log(`O número 1 é ${number1}`);
console.log(`O número 2 é ${number2}`);
console.log(`A soma é ${sum(number1, number2)}`);

// errado, totais totalmente diferentes por causa dos scopes
// console.log(total);