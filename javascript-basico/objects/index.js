function criaPessoa(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    }
}

pessoa1 = criaPessoa("Moises", "Ferreira", 21);
pessoa3 = criaPessoa("Yasmim", "Soares", 19)

console.log(pessoa1.nome, pessoa3.sobrenome);

const pessoa2 = {
    nome: "Moises",
    sobrenome: "Sousa",
    idade: 21,

    fala(){
        console.log(`${this.nome} ${this.sobrenome} está falando Oi`);
    },
    falaIdade(){
        console.log(`Minha idade atual é ${this.idade}`)
    },

    incrementaIdade() {
        this.idade++;
    }
}

pessoa2.falaIdade();
pessoa2.incrementaIdade();
pessoa2.falaIdade();
pessoa2.incrementaIdade();
pessoa2.falaIdade();
pessoa2.incrementaIdade();
pessoa2.falaIdade();
pessoa2.incrementaIdade();

