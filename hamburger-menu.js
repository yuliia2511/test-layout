const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navbar__menu');
const navSocials = document.querySelector('.navbar__socials');
const navBtn = document.querySelector('.navbar__btn');

hamburger.addEventListener('click', mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    navSocials.classList.toggle('active');
    navBtn.classList.toggle('active');
}

const link = document.querySelectorAll('.link');
const icon = document.querySelectorAll('.icon');
const btnItem = document.querySelector('.btn__item');

link.forEach(n => n.addEventListener('click', closeMenu));
icon.forEach(n => n.addEventListener('click', closeMenu));
btnItem.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    navSocials.classList.remove('active');
    navBtn.classList.remove('active');
}