///////////////////////////////////////////////////
// Make mobile navigation work

const btnNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNav.addEventListener('click', ()=>{
    headerEl.classList.toggle('nav-open')
})

////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href = link.getAttribute('href');
        
        // Scroll back top the top

        if(href === '#') window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

        // Scroll to other links
        if (href !== '#' && href.startsWith('#')){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: 'smooth'})
        }

        //Close mobile navigation

        if(link.classList.contains('main-nav-link')){
            headerEl.classList.toggle('nav-open')
        }
    })
})