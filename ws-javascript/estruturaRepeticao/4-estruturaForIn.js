// for...in
// cria um loop em cima de um objeto
// pegando as propriedades do objeto

let person = {
  name: 'John',
  age: 30,
  weight: 88.6,
}

// em person
// procura as propriedades do objeto
// e atribui as propriedades na variável property
for(let property in person) {
  console.log(property);
  console.log(person[property]);
}
