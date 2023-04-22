let nome = 'Luiz';
nome = 'Otavio';
nome[0] = 'R'; // String é um valor imutável, portanto, é possivel alterar a variável, mas não o valor em sí

console.log(nome);

/*
Primitivos (Imutáveis) - string, number, boolean, undefined. null, symbol - Valor*/
// let a = 'A';
// let b = a;

// a = "outra coisa";
// console.log(a, b) //as variáveis a e b ficam com valores diferentes
/*
Dados passados por referência - array, object, function
*/
// As variáveis a e b apontam para o mesmo endereço de memória, ou seja, caso manipule uma variável, acaba-se manipulando as duas
let a = [1,2,3];
let b = a;

a.push(4);
console.log(a, b);
b.pop();
console.log(a,b);

// Como apenas copiar a variavel A em B
a = [1,2,3];
b = [...a];

a.push(4);
console.log(a, b);
b.pop();
console.log(a,b);
