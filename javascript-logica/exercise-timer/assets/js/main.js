const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');

function getTimeBySeconds(seconds){
    let date = new Date(seconds * 1000);

    return date.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    })
}

let seconds = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(() => {
        seconds++;

        relogio.innerHTML = getTimeBySeconds(seconds);
    }, 1000)
}

iniciar.addEventListener('click', (event) => {
    iniciaRelogio();
})

pausar.addEventListener('click', (event) => {
    clearInterval(timer)
})

zerar.addEventListener('click', (event) => {
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    seconds = 0;
})