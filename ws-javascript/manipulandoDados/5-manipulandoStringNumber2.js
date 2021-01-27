// Manipulando String e Number
// Transformar um número quebrado com 2 casas decimais e trocar ponto por
// vírgula

let number = 525.00;
// método
console.log(number.toFixed(2).replace(".", ","));
// atrelando

// toFixed - transforma um número quebrado em duas casas decimais
// ex: 23,00
// replace - faz a troca do '.' pela ','
