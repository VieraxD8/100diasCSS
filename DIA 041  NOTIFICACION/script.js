const btn = document.querySelector('.button');
const message = document.querySelector('.alert');


btn.addEventListener('click', () => {

    message.classList.toggle('hide');

});