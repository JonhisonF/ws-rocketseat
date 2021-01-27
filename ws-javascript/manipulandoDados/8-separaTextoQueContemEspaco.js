// Manipulando Strings e Arrays

// Separe um texto que contém espaços, em um novo array onde cada texto é
// uma posição do array. Depois disso, transforme o array em um texto e onde
// eram espaços, coloque '_'

let phrase = "Eu quero viver o Amor!";
// o split transforma a string em um array
// pega o tipo de argumento que foi passado no split, que nesse caso é um espaço
// como tem espaços, esse vai ser o limite para separar as palavras dentro do
// array
let myArray = phrase.split(" ");
// o método 'join' aplicado em um array, ele vai juntar, ele vai automaticamente
// juntar o array
let phraseWithUnderscore = myArray.join("_");

console.log(phraseWithUnderscore.toLowerCase());
