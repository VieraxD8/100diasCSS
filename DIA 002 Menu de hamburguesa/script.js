
const menu = document.querySelector('.menu');

let linetop = document.querySelector('.line1');
let linecenter = document.querySelector('.line2');
let linebuttom = document.querySelector('.line3');

menu.addEventListener('click', () => {

    linetop.classList.toggle('top');
    linecenter.classList.toggle('centro');
    linebuttom.classList.toggle('buttom');

});