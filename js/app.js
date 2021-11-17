///////////////////////////////////////////////////
// Make mobile navigation work

const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click', ()=>{
    headerEl.classList.toggle('nav-open')
})