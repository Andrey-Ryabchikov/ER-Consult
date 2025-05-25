const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');


window.addEventListener('DOMContentLoaded', () => {
    menu.classList.remove('menu--active');
});


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu--active');
});