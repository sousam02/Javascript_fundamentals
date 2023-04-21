const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;

let imc = peso / (altura * altura); 
let anoNascimento = 2023 - idade;

console.log(nome, sobrenome, "tem" , idade, 'anos, pesa', peso, 'KG, tem' , altura, 'de altura e seu imc é de', imc);
console.log(nome, "Nasceu em", anoNascimento);

// Template strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} KG, tem ${altura} de altura e seu imc é de ${imc}`)
