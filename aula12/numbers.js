let num1 = 1500;
let num2 = 2.5;
let num3 = 10.434252343


console.log( num1.toString(2));
console.log(typeof num1);
console.log(num3.toFixed(2))
console.log(Number.isInteger(num1));
let temp = num1 * "Olá";
console.log(Number.isNaN(temp))


let num4 = 0.7;
let num5 = 0.1;

num4 += num5;
num4 += num5;
num4 += num5;

num4 = parseFloat(num4.toFixed(2));
console.log(num4)