const click = document.querySelector('.location');
const card = document.querySelector('.card');
const action = document.querySelector('.actions');

click.addEventListener('click', () => {
    click.classList.toggle('inactive');
    card.classList.toggle('active');
    click.style.animation = "none"
})

action.addEventListener('click', () => {
    click.classList.toggle('inactive');
    card.classList.toggle('active');
})