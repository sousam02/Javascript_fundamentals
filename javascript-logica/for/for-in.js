const fruits = ['Pera', 'Maçã', 'Uva'];

for(let index in fruits){
    console.log(index, fruits[index]);
}

const person = {
    nome: 'Moises',
    sobrenome: 'Sousa',
    idade: 21
}

for(let key in person){
    console.log(key, person[key])
}