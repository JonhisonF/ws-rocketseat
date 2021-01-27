// Manipulando array

let techs = ["html", "css", "js"];

// adicionar um item no fim
techs.push("nodeJS");
// adicionar no começo
techs.unshift("sql");
//  remover do fim
// techs.pop();
// remover do começo
// techs.shift();
//  pegar somente alguns elementos do array
// slice - cortar
// o primeiro argumento é onde ele vai começar a recuperar o elemento
// o segundo argumento é onde vai terminar
// console.log(techs.slice(1, 3))
// remover 1 ou mais itens em qualquer posição do array
// o primeiro argumento é o índice de qual elemento será retirado
// o segundo é a parada
// techs.splice(1,1);
// encontrar a posição de um elemento no array
let index = techs.indexOf('html');
techs.splice(index, 1);

console.log(techs)
