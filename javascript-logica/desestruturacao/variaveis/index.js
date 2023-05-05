let a = 'A';
let b = 'B';
let c = 'C';

console.log(a,b,c);
[a, b, c] = [b, c, a];
console.log(a,b,c)
//////////////////////////////////////////////////
const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [primeiroNumero, segundoNumero, , quartoNumero, , sextoNumero, ...resto] = numeros;
console.log(primeiroNumero, segundoNumero, quartoNumero, sextoNumero);
console.log(resto)
