function soma(a, b = 2, c = 1) {
    console.log(a + b + c);
}

soma(1, undefined, 20)

// Parameters as desestructuring
console.log('DESESTRUCTURING')

function infos({firstName, lastName, age}){
    console.log(firstName, lastName, age);
}

infos({firstName: 'Moises', lastName: 'Sousa', age: 21})


// Parameters using rest operator
console.log('REST OPERATOR')
function account(operator, acumulator, ...numbers){
    for(number of numbers){
        if(operator === '+') acumulator += number;
        if(operator === '-') acumulator -= number;
        if(operator === '*') acumulator *= number;
        if(operator === '/') acumulator /= number;
    }
    console.log(acumulator)
}

account('/', 1, 1,2,3,4,5,67,7);