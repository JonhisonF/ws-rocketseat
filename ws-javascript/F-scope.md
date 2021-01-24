# Scope

* Escopo determina a visibilidade de alguma variável no js

# Block statement - Declaração de bloco
```js
// vamos iniciar um bloc
{
    // aqui dentro é um bloc e posso colocar qualquer código
} // aqui fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`

## var
```js 
// var é global e poderá funcionar fora de um escopo de bloco
// o var é muito flexivel, porque permite a alteração em diferentes escopos
console.log('> existe x antes do bloco? ', x);

{
    var x = 0;
}

console.log('> existe x depois do bloco? ', x);
```

## let e const