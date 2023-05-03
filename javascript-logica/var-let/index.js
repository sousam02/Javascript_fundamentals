// LET tem escopo de bloco, ou seja, qualquer bloco entre chaves {}

let nome = 'Moises';
var nome2 = 'Moises';

var nome2 = 'Otávio';


if(true){
    let nome = 'Moises Ferreira'
    console.log(nome, nome2)
    if(true){
        let nome = 'Outra coisa'
        var nome2 = 'Ronaldo';
        console.log(nome, nome2)
    }
}

console.log(nome, nome2)
