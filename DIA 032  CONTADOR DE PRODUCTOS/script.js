const menos = document.querySelector('.minus');
const suma = document.querySelector('.plus');
const numero = document.querySelector('.fadeIn');

let count = 0 ;

suma.addEventListener('click' ,() => {

    count++;
    numero.textContent = count;

});


menos.addEventListener('click', () => {

    count--;
    numero.textContent = count;

});