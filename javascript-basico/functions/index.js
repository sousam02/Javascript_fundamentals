
// FUNÇÃO PADRÃO
function soma(x,y) {
    const resultado = x+y;
    return resultado;
}

console.log(soma(2,2))

// FUNÇÃO ANONIMA
const subtracao = function(x,y) {
    return x-y;
};

console.log(subtracao(4, 2));

// ARROW FUNCTION
const multiplicacao = (x,y) => x*y; //DE MODO SIMPLIFICADO, ENTRE PARÊNTESES OS PARÂMETROS SAO RECEBIDOS, E APÓS A ARROW, FAZ SE O VALOR A SER RETORNADO

console.log(multiplicacao(3,3));


// function saudacao(nome) {
//     return `Bom dia ${nome}!`
// }

// const variavel = saudacao("Moises");

// console.log(variavel)