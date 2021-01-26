// function hoisting

// como se o javascript estive fazendo isso por debaixo dos panos
// function sayMyName() {
//   console.log('Jonhison');
// }


/* function sayMyName() {
  console.log('Jonhison');
} */

/* const não recebe hoisting(elevação)
var recebe elevação, mas apenas declara a variável, como se fosse assim:
var sayMyName <- isso que acontece 
colocando o nome da função ela não vai deixar não ser uma função*/

// =========== var acontece o hoisting - errado =========== //
// mas por ser uma função não é reconhecida como uma função quando
// acontece o hoisting

/* sayMyName();

var sayMyName = function sayMyName() {
  console.log('Jonhison');
} */

// =========== const e let não acontece o hoisting - errado =========== //

/* sayMyName();

const sayMyName = function() {
  console.log('Jonhison');
} */


// =========== HOISTING(elevação) - certo =========== //

sayMyName();

function sayMyName() {
  console.log('JOnhison');
}