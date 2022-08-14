const hamburger = document.querySelector('.header .nav-bar .hamburger');
const nav = document.querySelector('.header .nav-bar nav');
hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('nav-toggle');
    nav.classList.toggle('close');
});