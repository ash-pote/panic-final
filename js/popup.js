// Clone Pop Ups
// var i = 1

// const popUpLoop = function () {
//     const popupSection = document.querySelector("#pop-ups-container")
//     const popup = document.querySelector('.popup-01')

//     popupSection.appendChild(popup.cloneNode(true))

//     i++

//     if (i < 20) {
//         popUpLoop()
//     }
// }

// popUpLoop()

// close functionality for all
const popups = document.querySelectorAll('.popup')
// console.log(popups)

popups.forEach(function(popup) {
    popup.addEventListener("click", function () {
        this.style.display = 'none'
    })
})

const isReducedPopUp = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

if (!!isReducedPopUp) {
    // Paused Animation
} else { 
    // pop up 
    gsap.set(".popup-01", { scale: 0})
    gsap.to(".popup-01", { duration: 0.1, scale: 1, delay: 0.5 })

    gsap.set(".popup-02", { scale: 0})
    gsap.to(".popup-02", { duration: 0.1, scale: 1, delay: 0.7 })

    gsap.set(".popup-03", { scale: 0})
    gsap.to(".popup-03", { duration: 0.1, scale: 1, delay: 0.9 })

    gsap.set(".popup-04", { scale: 0})
    gsap.to(".popup-04", { duration: 0.1, scale: 1, delay: 1.1 })

    gsap.set(".popup-05", { scale: 0})
    gsap.to(".popup-05", { duration: 0.1, scale: 1, delay: 1.3 })

    gsap.set(".popup-17", { scale: 0})
    gsap.to(".popup-17", { duration: 0.1, scale: 1, delay: 1.5 })

    gsap.set(".popup-06", { scale: 0})
    gsap.to(".popup-06", { duration: 0.1, scale: 1, delay: 1.7 })

    gsap.set(".popup-07", { scale: 0})
    gsap.to(".popup-07", { duration: 0.1, scale: 1, delay: 1.9 })

    gsap.set(".popup-08", { scale: 0})
    gsap.to(".popup-08", { duration: 0.1, scale: 1, delay: 2.1 })

    gsap.set(".popup-09", { scale: 0})
    gsap.to(".popup-09", { duration: 0.1, scale: 1, delay: 2.3 })

    gsap.set(".popup-10", { scale: 0})
    gsap.to(".popup-10", { duration: 0.1, scale: 1, delay: 2.5 })

    gsap.set(".popup-11", { scale: 0})
    gsap.to(".popup-11", { duration: 0.1, scale: 1, delay: 2.7 })




 }


 // Pop Up Click Link Overlay
//  const clickLink = document.querySelector('.click-link-01')
//  const link01Overlay = document.querySelector('#link01-overlay')
//  const link01Vid = document.querySelector('#rikroll')
//  link01Vid.muted=true;

//  clickLink.addEventListener("click", function () {
//     link01Overlay.style.display = 'block'
//     link01Vid.muted=false;
//     link01Vid.play()
//  })