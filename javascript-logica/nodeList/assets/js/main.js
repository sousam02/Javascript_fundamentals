const div = document.querySelector('.paragrafos');
const paragrafos = div.querySelectorAll('p');

function getBackgroundColor(){
    return getComputedStyle(document.body).backgroundColor;
}

paragrafos.forEach(function(paragraph){
    paragraph.style.backgroundColor = getBackgroundColor();
    paragraph.style.color = '#fff';
})


// console.log(backgroundColor)