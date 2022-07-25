// Health Bar Animation
const healthbar = document.querySelectorAll('.health-bar ')
const healthbarContainer = document.querySelectorAll('.health-bar-container')

const isReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;
  if (!!isReduced) {
      // Paused Animation
  } else {
    var tlHealthBar = gsap.timeline();
    tlHealthBar.from(healthbar, { width: 200 })
    tlHealthBar.to(healthbar, { duration: 5, width: 0, repeat: -1, yoyo: true })
    // tlHealthBar.from( healthbarContainer, { opacity: 1 } )
    // tlHealthBar.to( healthbarContainer, { duration: 1, opacity: 0, repeat: -1 } )
}

//////////////////////////////////////
// timer animation
if (!!isReduced) {
    // Paused Animation
} else {
    const timer = document.querySelector('.timer');

    let numberAnimate = anime({
        targets: timer,
        innerHTML: ["00:00:00"],
        round: 1,
        direction: 'alternate',
        easing: 'linear',
        duration: 3500,
        loop: true,
        autoplay: true,
    })
}

//////////////////////////////////////
/* New Message Carousel */
const carousels = document.querySelectorAll(".user-message-notification")

if (!!isReduced) {
    carousels.forEach(carousel => {
        const spanTag = carousel.querySelector("span")
        const spanHeight = spanTag.clientHeight
    
        for (let i = 0; i < 40; i = i + 1) {
            carousel.appendChild(spanTag.cloneNode(true))
        }
    })
  } else {
    carousels.forEach(carousel => {
        const spanTag = carousel.querySelector("span")
        const spanHeight = spanTag.clientHeight
    
        for (let i = 0; i < 40; i = i + 1) {
            carousel.appendChild(spanTag.cloneNode(true))
        }
    
        const movementTimeline = gsap.timeline({
            repeat: -1
        })
    
        movementTimeline
        .set(carousel, { y: 0 })
        .to(carousel, { y: spanHeight, duration: 0.3, ease: "linear" })
    })
}

//////////////////////////////////////
/* @everyone Carousel */
const everyoneCarousels = document.querySelectorAll(".everyone-container h6")

if (!!isReduced) { 
    // Paused Animation
    everyoneCarousels.forEach(ecarousel => {
        const everyoneSpanTag = ecarousel.querySelector("span")
        const everyoneSpanTagWidth = everyoneSpanTag.clientWidth
    
        for (let i = 0; i < 12; i = i + 1) {
            ecarousel.appendChild(everyoneSpanTag.cloneNode(true))
        }
    })
 } else {
    everyoneCarousels.forEach(ecarousel => {
        const everyoneSpanTag = ecarousel.querySelector("span")
        const everyoneSpanTagWidth = everyoneSpanTag.clientWidth
    
        for (let i = 0; i < 12; i = i + 1) {
            ecarousel.appendChild(everyoneSpanTag.cloneNode(true))
        }
    
        const everyoneMovementTimeline = gsap.timeline({
            repeat: -1
        })
        
        everyoneMovementTimeline
        .set(everyoneCarousels, { x: 0 })
        .to(everyoneCarousels, { x: 400, duration: 4, ease: "linear" })
    })
}