// function scope
// para deixar mais claro, declarando só a variável, por está vazia,
// vai ser undefined
let subject;

// não tendo um nome como parâmetro, o subject do scope global 
// vai ser atribuido o valor da função, buscando o valor do global

// passando um parâmetro nos dois escopos começam a ter dois subject
function createThink(subject) {
  subject = 'study';
  return subject;
}

console.log(createThink(subject));
console.log(subject);
