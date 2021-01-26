// callback function
// callback - chame de volta
// significa que será chamada uma função e chamar outra dentro dessa função de 
// volta
function sayMyName(name) {
  console.log('Antes de executar a função callback')
  // pode executar como uma função normal, não deixa de ser uma função normal
  name();

  console.log('Depois de executar a função callback')
}

// callback é uma função que está sendo passada como argumento para outra função
sayMyName(
  () => {
    console.log('Estou em uma callback');
  }
);