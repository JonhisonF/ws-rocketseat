// throw - disparar - lançar
// try - tentar, catch - pegar
// try...catch

function sayMyName(name = '') {
  if (name == '') {
    throw 'Nome é obrigatório';
  }

  console.log('Depois do erro');
}

// try...catch
try{
  sayMyName();
} catch(e) {
  console.log(e);
}

console.log('Após ao try/catch');
