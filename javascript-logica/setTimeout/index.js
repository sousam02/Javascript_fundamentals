function showHours(){
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {
        hour12: false
    })
}

// setInterval run a function in a determined interval sent by paramether
const timer = setInterval(() => console.log(showHours()), 1000)


// setTimeout run a function after a determined time sent by paramether
setTimeout(() => clearInterval(timer), 5000)

setTimeout(() => console.log('Session expired'), 6000)
