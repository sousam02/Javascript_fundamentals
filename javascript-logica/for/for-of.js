const personName = 'Moises Sousa';
for(let letter of personName) {
    console.log(letter)
}

const names = ['Moises', 'João', 'Maria'];
names.forEach(function(element, index){
    console.log(element, index);
});