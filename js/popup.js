// clone each pop up with delay
// var i = 1

// function popUpLoopOne () {
//     setTimeout(function () {
//         const popupSection = document.querySelector("#pop-ups")
//         const popup = document.querySelector('.popup')

//         popupSection.appendChild(popup.cloneNode(true))

//         i++

//         if (i < 5) {
//             popUpLoopOne()
//         }

//     }, 150)
// }

// close functionality for all
const popups = document.querySelectorAll('.popup')
// console.log(popups)

popups.forEach(function(popup) {
    popup.addEventListener("click", function () {
        this.style.display = 'none'
    })
})

window.onload = function() {
    const isReducedPopUp = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

if (!!isReducedPopUp) {
    // Paused Animation
} else { 
    // pop up 

    gsap.set(".popup-01", { scale: 0})
    gsap.to(".popup-01", { duration: 0.1, scale: 1, delay: 0.5 })

    gsap.set(".click-link-01", { scale: 0})
    gsap.to(".click-link-01", { duration: 0.1, scale: 1, delay: 0.6 })

    gsap.set(".popup-02", { scale: 0})
    gsap.to(".popup-02", { duration: 0.1, scale: 1, delay: 0.7 })

    gsap.set(".popup-03", { scale: 0})
    gsap.to(".popup-03", { duration: 0.1, scale: 1, delay: 0.8 })

    gsap.set(".popup-04", { scale: 0})
    gsap.to(".popup-04", { duration: 0.1, scale: 1, delay: 0.9 })

    gsap.set(".popup-05", { scale: 0})
    gsap.to(".popup-05", { duration: 0.1, scale: 1, delay: 1 })

    gsap.set(".click-link-02", { scale: 0})
    gsap.to(".click-link-02", { duration: 0.1, scale: 1, delay: 1.1 })

    gsap.set(".popup-17", { scale: 0})
    gsap.to(".popup-17", { duration: 0.1, scale: 1, delay: 1.2 })

    gsap.set(".popup-06", { scale: 0})
    gsap.to(".popup-06", { duration: 0.1, scale: 1, delay: 1.3 })

    gsap.set(".popup-07", { scale: 0})
    gsap.to(".popup-07", { duration: 0.1, scale: 1, delay: 1.4 })

    gsap.set(".popup-08", { scale: 0})
    gsap.to(".popup-08", { duration: 0.1, scale: 1, delay: 1.5 })

    gsap.set(".click-link-03", { scale: 0})
    gsap.to(".click-link-03", { duration: 0.1, scale: 1, delay: 1.6 })

    gsap.set(".popup-09", { scale: 0})
    gsap.to(".popup-09", { duration: 0.1, scale: 1, delay: 1.7 })

    gsap.set(".popup-10", { scale: 0})
    gsap.to(".popup-10", { duration: 0.1, scale: 1, delay: 1.8 })

    gsap.set(".popup-11", { scale: 0})
    gsap.to(".popup-11", { duration: 0.1, scale: 1, delay: 1.9 })



    gsap.set(".popup-01-02", { scale: 0})
    gsap.to(".popup-01-02", { duration: 0.1, scale: 1, delay: 2 })

    gsap.set(".popup-02-02", { scale: 0})
    gsap.to(".popup-02-02", { duration: 0.1, scale: 1, delay: 2.1 })

    gsap.set(".popup-03-02", { scale: 0})
    gsap.to(".popup-03-02", { duration: 0.1, scale: 1, delay: 2.2 })

    gsap.set(".popup-04-02", { scale: 0})
    gsap.to(".popup-04-02", { duration: 0.1, scale: 1, delay: 2.3 })

    gsap.set(".popup-05-02", { scale: 0})
    gsap.to(".popup-05-02", { duration: 0.1, scale: 1, delay: 2.4 })

    gsap.set(".popup-06-02", { scale: 0})
    gsap.to(".popup-06-02", { duration: 0.1, scale: 1, delay: 2.5 })

    gsap.set(".popup-07-02", { scale: 0})
    gsap.to(".popup-07-02", { duration: 0.1, scale: 1, delay: 2.6 })

    gsap.set(".popup-08-02", { scale: 0})
    gsap.to(".popup-08-02", { duration: 0.1, scale: 1, delay: 2.7 })

    gsap.set(".popup-09-02", { scale: 0})
    gsap.to(".popup-09-02", { duration: 0.1, scale: 1, delay: 2.8 })

    gsap.set(".popup-10-02", { scale: 0})
    gsap.to(".popup-10-02", { duration: 0.1, scale: 1, delay: 2.9 })

    gsap.set(".popup-11-02", { scale: 0})
    gsap.to(".popup-11-02", { duration: 0.1, scale: 1, delay: 3 })

    //////////////////////////////

    gsap.set(".popup-01-03", { scale: 0})
    gsap.to(".popup-01-03", { duration: 0.1, scale: 1, delay: 5 })

    gsap.set(".popup-02-03", { scale: 0})
    gsap.to(".popup-02-03", { duration: 0.1, scale: 1, delay: 5.1 })

    gsap.set(".popup-03-03", { scale: 0})
    gsap.to(".popup-03-03", { duration: 0.1, scale: 1, delay: 5.2 })

    gsap.set(".popup-04-03", { scale: 0})
    gsap.to(".popup-04-03", { duration: 0.1, scale: 1, delay: 5.3 })

    gsap.set(".popup-05-03", { scale: 0})
    gsap.to(".popup-05-03", { duration: 0.1, scale: 1, delay: 5.4 })

    gsap.set(".popup-06-03", { scale: 0})
    gsap.to(".popup-06-03", { duration: 0.1, scale: 1, delay: 5.5 })

    gsap.set(".popup-07-03", { scale: 0})
    gsap.to(".popup-07-03", { duration: 0.1, scale: 1, delay: 5.6 })

    gsap.set(".popup-08-03", { scale: 0})
    gsap.to(".popup-08-03", { duration: 0.1, scale: 1, delay: 5.7 })

    gsap.set(".popup-09-03", { scale: 0})
    gsap.to(".popup-09-03", { duration: 0.1, scale: 1, delay: 5.8 })

    gsap.set(".popup-10-03", { scale: 0})
    gsap.to(".popup-10-03", { duration: 0.1, scale: 1, delay: 5.9 })

    gsap.set(".popup-11-03", { scale: 0})
    gsap.to(".popup-11-03", { duration: 0.1, scale: 1, delay: 6 })

    gsap.set(".popup-01-04", { scale: 0})
    gsap.to(".popup-01-04", { duration: 0.1, scale: 1.3, delay: 6.1 })

    gsap.set(".popup-02-04", { scale: 0})
    gsap.to(".popup-02-04", { duration: 0.1, scale: 1, delay: 6.2 })

    gsap.set(".popup-03-04", { scale: 0})
    gsap.to(".popup-03-04", { duration: 0.1, scale: 1, delay: 6.3 })

    gsap.set(".popup-04-04", { scale: 0})
    gsap.to(".popup-04-04", { duration: 0.1, scale: 1, delay: 6.4 })

    gsap.set(".popup-05-04", { scale: 0})
    gsap.to(".popup-05-04", { duration: 0.1, scale: 1, delay: 6.5 })

    gsap.set(".popup-06-04", { scale: 0})
    gsap.to(".popup-06-04", { duration: 0.1, scale: 1, delay: 6.6 })

    gsap.set(".popup-07-04", { scale: 0})
    gsap.to(".popup-07-04", { duration: 0.1, scale: 1, delay: 6.7 })

    gsap.set(".popup-08-04", { scale: 0})
    gsap.to(".popup-08-04", { duration: 0.1, scale: 1, delay: 6.8 })

    gsap.set(".popup-09-04", { scale: 0})
    gsap.to(".popup-09-04", { duration: 0.1, scale: 1, delay: 6.9 })

    gsap.set(".popup-10-04", { scale: 0})
    gsap.to(".popup-10-04", { duration: 0.1, scale: 1, delay: 7 })

    gsap.set(".popup-11-04", { scale: 0})
    gsap.to(".popup-11-04", { duration: 0.1, scale: 1, delay: 7.1 })

    //////////////////////////////

    // gsap.set(".popup-01-05", { scale: 0})
    // gsap.to(".popup-01-05", { duration: 0.1, scale: 1.3, delay: 10 })

    // gsap.set(".popup-02-05", { scale: 0})
    // gsap.to(".popup-02-05", { duration: 0.1, scale: 1, delay: 10.2 })

    // gsap.set(".popup-03-05", { scale: 0})
    // gsap.to(".popup-03-05", { duration: 0.1, scale: 1, delay: 10.4 })

    // gsap.set(".popup-04-05", { scale: 0})
    // gsap.to(".popup-04-05", { duration: 0.1, scale: 1, delay: 10.6 })

    // gsap.set(".popup-05-05", { scale: 0})
    // gsap.to(".popup-05-05", { duration: 0.1, scale: 1, delay: 10.8 })

    // gsap.set(".popup-06-05", { scale: 0})
    // gsap.to(".popup-06-05", { duration: 0.1, scale: 1, delay: 11 })

    // gsap.set(".popup-07-05", { scale: 0})
    // gsap.to(".popup-07-05", { duration: 0.1, scale: 1, delay: 11.2 })

    // gsap.set(".popup-08-05", { scale: 0})
    // gsap.to(".popup-08-05", { duration: 0.1, scale: 1, delay: 11.4 })

    // gsap.set(".popup-09-05", { scale: 0})
    // gsap.to(".popup-09-05", { duration: 0.1, scale: 1, delay: 11.6 })

    // gsap.set(".popup-10-05", { scale: 0})
    // gsap.to(".popup-10-05", { duration: 0.1, scale: 1, delay: 11.8 })

    // gsap.set(".popup-11-05", { scale: 0})
    // gsap.to(".popup-11-05", { duration: 0.1, scale: 1, delay: 12 })

    //////////////////////////////

        // gsap.set(".popup-01-06", { scale: 0})
        // gsap.to(".popup-01-06", { duration: 0.1, scale: 1.3, delay: 12.2 })
    
        // gsap.set(".popup-02-06", { scale: 0})
        // gsap.to(".popup-02-06", { duration: 0.1, scale: 1, delay: 12.4 })
    
        // gsap.set(".popup-03-06", { scale: 0})
        // gsap.to(".popup-03-06", { duration: 0.1, scale: 1, delay: 12.6 })
    
        // gsap.set(".popup-04-06", { scale: 0})
        // gsap.to(".popup-04-06", { duration: 0.1, scale: 1, delay: 12.8 })
    
        // gsap.set(".popup-05-06", { scale: 0})
        // gsap.to(".popup-05-06", { duration: 0.1, scale: 1, delay: 13 })
    
        // gsap.set(".popup-06-06", { scale: 0})
        // gsap.to(".popup-06-06", { duration: 0.1, scale: 1, delay: 13.2 })
    
        // gsap.set(".popup-07-06", { scale: 0})
        // gsap.to(".popup-07-06", { duration: 0.1, scale: 1, delay: 13.4 })
    
        // gsap.set(".popup-08-06", { scale: 0 })
        // gsap.to(".popup-08-06", { duration: 0.1, scale: 1, delay: 13.6 })
    
        // gsap.set(".popup-09-06", { scale: 0 })
        // gsap.to(".popup-09-06", { duration: 0.1, scale: 1, delay: 13.8 })
    
        // gsap.set(".popup-10-06", { scale: 0})
        // gsap.to(".popup-10-06", { duration: 0.1, scale: 1, delay: 14 })
    
        // gsap.set(".popup-11-06", { scale: 0})
        // gsap.to(".popup-11-06", { duration: 0.1, scale: 1, delay: 14.2 })
 }
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