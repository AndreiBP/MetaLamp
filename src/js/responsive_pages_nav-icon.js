/* Nav icon */
const navBtn = document.querySelector('.nav-icon-btn'); //присваиваем переменной класс
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__inner');

navBtn.onclick = function () {
    navIcon.classList.toggle('nav-icon--active'); //применяем новый класс присвоенный
    nav.classList.toggle('header__inner--mobile');
    document.body.classList.toggle('no-scroll');
}