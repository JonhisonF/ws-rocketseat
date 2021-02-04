/*
  Operadores unários
\  delete
*/
const person = {
  name: 'jONHISON',
  age: 18
}
// mostra o tipo de dado
// console.log(typeof "Jonhison");

// delata a propriedade do objeto
// só delata o que existe dentro do objeto
delete person.age

console.log(person);
