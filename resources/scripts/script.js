const title = document.querySelector('h1');
const photo = document.getElementById('photo');

const changeColor = function(event) {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    event.target.style.color = `rgb(${red},${green},${blue})`; 
}

const invert = function(event) {
    if(event.target.style.filter === 'invert(100%)') {
        event.target.style.filter = 'invert(0%)'
    } else {
        event.target.style.filter = 'invert(100%)'
    }
}

title.addEventListener('click', changeColor);
photo.onclick = invert;