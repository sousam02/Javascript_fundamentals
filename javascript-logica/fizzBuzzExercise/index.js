const fizzBuzz = (number) => {
    if(isNaN(number)) return "isn't even a number";
    
    if(number % 3 === 0 && number % 5 === 0) return "FizzBuzz";

    if(number % 3 === 0) return 'Fizz';

    if(number % 5 === 0) return 'Buzz';

    if(number % 3 !== 0 && number % 5 !== 0) return number;
    
}

for(let number = 0; number <= 100; number++){
    console.log(number, fizzBuzz(number));
}