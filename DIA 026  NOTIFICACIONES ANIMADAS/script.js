const cardOne =  document.querySelector('.card.one');
const cardTwo =  document.querySelector('.card.two');
const cardThree =  document.querySelector('.card.three');
const buttonOne = document.querySelector('button.one');
const buttonTwo = document.querySelector('button.two');
const buttonThree = document.querySelector('button.three');

cardOne.addEventListener('click', () => {

    cardOne.classList.toggle('active');
    cardOne.classList.toggle('inactive');
    cardTwo.classList.toggle('active');
    cardThree.classList.remove('inactive');

});


cardTwo.addEventListener('click', () => {

    cardTwo.classList.toggle('active');
    cardTwo.classList.toggle('inactive');
    cardThree.classList.toggle('active');
    

});

cardThree.addEventListener('click', () => {

    cardThree.classList.toggle('active');
    cardThree.classList.toggle('inactive');
    cardOne.classList.toggle('inactive');
    cardOne.classList.toggle('active');
    cardTwo.classList.toggle('inactive');
  

});
