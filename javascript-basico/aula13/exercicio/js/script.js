const numeroUsuario = parseFloat(prompt("Digite um número"));

const numeroTitulo = document.getElementById("numero-titulo");
const raizQuadrada = document.getElementById("raiz-quadrada");
const notNumber = document.getElementById("not-number");
const floor = document.getElementById("floor");
const ceil = document.getElementById("ceil");
const round = document.getElementById("round");

numeroTitulo.innerHTML = numeroUsuario;


raizQuadrada.innerHTML = `A raiz quadrada é: ${numeroUsuario ** 0.5}`;
notNumber.innerHTML = `É um NaN: ${Number.isNaN(numeroUsuario)}`;
floor.innerHTML =  `Arredondamento para baixo: ${Math.floor(numeroUsuario)}`;
ceil.innerHTML = `Arredondamento para cima: ${Math.ceil(numeroUsuario)}`;
round.innerHTML = `Arredondamento automático: ${Math.round(numeroUsuario)}`;