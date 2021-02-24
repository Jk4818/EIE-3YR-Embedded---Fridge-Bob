/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')

// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== GSAP ANIMATION =====*/
// NAV
gsap.from('.nav__logo, .nav__toggle', {opacity: 0, duration: 1, delay:1, y: 10})
gsap.from('.nav__item', {opacity: 0, duration: 1, delay: 1.1, y: 30, stagger: 0.2,})

// HOME
gsap.from('.hero', {opacity: 0, duration: 1, delay:0.3, y: 30})
gsap.from('.home__title', {opacity: 0, duration: 1, delay:0.6, y: 30})
gsap.from('.home__description', {opacity: 0, duration: 1, delay:0.8, y: 30})
gsap.from('.home__button', {opacity: 0, duration: 1, delay:1.1, y: 30})
gsap.from('.asterisk', {opacity: 0, duration: 1, delay:1.1, y: 30})
gsap.from('.chart-container', {opacity: 0, duration: 1, delay:1.1, y: 30})

// PRODUCT
gsap.from('.stats-container', {opacity: 0, duration: 1, delay:1.1, y: 30})


// FAQ CARDS
gsap.from('.intro', {opacity: 0, duration: 1, delay:1.0, y: 10})
gsap.from(document.querySelector(`.card:nth-child(${1})`), {opacity: 0, duration: 1, delay:0.8, y: 10})
gsap.from(document.querySelector(`.card:nth-child(${2})`), {opacity: 0, duration: 1, delay:0.9, y: 10})
gsap.from(document.querySelector(`.card:nth-child(${3})`), {opacity: 0, duration: 1, delay:1.0, y: 10})
gsap.from(document.querySelector(`.card:nth-child(${4})`), {opacity: 0, duration: 1, delay:1.1, y: 10})



// FAQ CARDS
gsap.from('.card-1', {opacity: 0, duration: 1, delay:0.6, y: 10})
gsap.from('.card-2', {opacity: 0, duration: 1, delay:0.7, y: 10})
gsap.from('.card-3', {opacity: 0, duration: 1, delay:0.8, y: 10})
gsap.from('.card-4', {opacity: 0, duration: 1, delay:0.9, y: 10})
gsap.from('.card-5', {opacity: 0, duration: 1, delay:1, y: 10})
gsap.from('.card-6', {opacity: 0, duration: 1, delay:1.1, y: 10})
gsap.from('.card-7', {opacity: 0, duration: 1, delay:1.2, y: 10})
gsap.from('.card-8', {opacity: 0, duration: 1, delay:1.3, y: 10})