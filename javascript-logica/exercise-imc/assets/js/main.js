
function main(){
    const form = document.querySelector('.form');

    function verificaEnvio(evento){
        evento.preventDefault();
        const resultado = document.querySelector('.resultado');

        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        console.log(peso.value, altura.value)
        const imc = calculaImc(peso.value, altura.value);

        if(imc < 18.5){
            resultado.innerHTML = `<div class="valido">O seu imc é ${imc} (Abaixo do peso)</div>`;
        }else if(imc >=18.5 && imc < 25){
            resultado.innerHTML = `<div class="valido">O seu imc é ${imc} (Peso normal)</div>`;
        }else if (imc >= 25 && imc < 30 ){
            resultado.innerHTML = `<div class="valido">O seu imc é ${imc} (Sobrepeso)</div>`;
        }else if(imc >=30 && imc < 35) {
            resultado.innerHTML = `<div class="valido">O seu imc é ${imc} (Obesidade grau 1)</div>`;
        }else if(imc >= 35 && imc < 40) {
            resultado.innerHTML = `<div class="valido">O seu imc é ${imc} (Obesidade grau 2)</div>`;
        }else if(imc >=40) {
            resultado.innerHTML = `<div class="valido">O seu imc é ${imc} (Obesidade grau 3)</div>`;
        }else if(isNaN(peso.value)){
            resultado.innerHTML = `<div class"inválido">Peso inválido</div>`;
        }else if(isNaN(altura.value)){
            resultado.innerHTML = `<div class="invalido"> Altura inválida </div>`
        }
        

    }

    function calculaImc(peso, altura){
        altura = altura / 100;
        return (peso / (altura * altura)).toFixed(2);
    }

    form.addEventListener('submit', verificaEnvio);
}

main()