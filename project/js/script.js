function exercise(){
    form = document.querySelector('.form');
    resultado = document.querySelector('.resultados')

    const pessoas = [];

    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        const Pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value

        };
        pessoas.push(Pessoa);
        console.log(pessoas)
        resultado.innerHTML += `<p>${nome.value}, ${peso.value}, ${altura.value}</p>`;
       
    }

    form.addEventListener('submit', recebeEventoForm);




}

exercise()