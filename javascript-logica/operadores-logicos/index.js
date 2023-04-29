/*
    Operadores lógicos
    && -> AND -> E
    || -> OR -> OU
    ! -> NOT -> NÃO
*/
// EXPRESSAO AND
console.log(true && true && false && true) // false

// EXPRESSÃO OR
console.log(true || false || false || false) // apenas uma das expressões precisam ser verdadeiras
//////////////////////////////////////
const usuario = "Luiz"
const senha = '123456'
const vaiLogar = usuario === 'Luiz' && senha === '123456' // usuario e senha precisam ser verdadeiros para logar se tornar verdadeiro
console.log(vaiLogar)
//////////////////////////////////////////
console.log(!true)