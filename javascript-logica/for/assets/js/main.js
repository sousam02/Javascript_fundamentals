const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]
const sec = document.querySelector('.container');
const div = document.createElement('div');

for(let i=0; i < elementos.length; i++){
    let newElement = document.createElement(elementos[i].tag);
    let phrase = document.createTextNode(elementos[i].texto);
    newElement.appendChild(phrase);
    div.appendChild(newElement);
}
sec.appendChild(div)