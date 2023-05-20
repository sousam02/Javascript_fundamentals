function createMultiplier(multiplier) {
    return function (n) {
        return n * multiplier;
    }
}

const double = createMultiplier(2);
const triple = createMultiplier(3);


console.log(double(5));
console.log(triple(15));