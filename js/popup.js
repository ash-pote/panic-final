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
    // gsap.set(".popup-01", { opacity: 0, scale: 0, })
    // gsap.to(".popup-01", { opacity: 1, duration: 0.1, scale: 1, delay: 0.5 })

    gsap.set(".click-link-01", { opacity: 0, scale: 0})
    gsap.to(".click-link-01", { opacity: 1, duration: 0.1, scale: 1, delay: 0.6 })

    // gsap.set(".popup-02", { opacity: 0, scale: 0})
    // gsap.to(".popup-02", { opacity: 1, duration: 0.1, scale: 1, delay: 0.7 })

    // gsap.set(".popup-03", { opacity: 0, scale: 0})
    // gsap.to(".popup-03", { opacity: 1, duration: 0.1, scale: 1, delay: 0.8 })

    // gsap.set(".popup-04", { opacity: 0, scale: 0})
    // gsap.to(".popup-04", { opacity: 1, duration: 0.1, scale: 1, delay: 0.9 })

    // gsap.set(".popup-05", { opacity: 0, scale: 0})
    // gsap.to(".popup-05", { opacity: 1, duration: 0.1, scale: 1, delay: 1 })

    gsap.set(".click-link-02", { opacity: 0, scale: 0})
    gsap.to(".click-link-02", { opacity: 1, duration: 0.1, scale: 1, delay: 1.1 })

    // gsap.set(".popup-06", { opacity: 0, scale: 0})
    // gsap.to(".popup-06", { opacity: 1, duration: 0.1, scale: 1, delay: 1.3 })

    // gsap.set(".popup-07", { opacity: 0, scale: 0})
    // gsap.to(".popup-07", { opacity: 1, duration: 0.1, scale: 1, delay: 1.4 })

    // gsap.set(".popup-08", { opacity: 0, scale: 0})
    // gsap.to(".popup-08", { opacity: 1, duration: 0.1, scale: 1, delay: 1.5 })

    gsap.set(".click-link-03", { opacity: 0, scale: 0})
    gsap.to(".click-link-03", { opacity: 1, duration: 0.1, scale: 1, delay: 1.6 })

    // gsap.set(".popup-09", { opacity: 0, scale: 0})
    // gsap.to(".popup-09", { opacity: 1, duration: 0.1, scale: 1, delay: 1.7 })

    // gsap.set(".popup-10", { opacity: 0, scale: 0})
    // gsap.to(".popup-10", { opacity: 1, duration: 0.1, scale: 1, delay: 1.8 })

    // gsap.set(".popup-11", { opacity: 0, scale: 0})
    // gsap.to(".popup-11", { opacity: 1, duration: 0.1, scale: 1, delay: 1.9 })

    // gsap.set(".popup-01-02", { opacity: 0, scale: 0})
    // gsap.to(".popup-01-02", { opacity: 1, duration: 0.1, scale: 1, delay: 2 })

    // gsap.set(".popup-02-02", { opacity: 0, scale: 0})
    // gsap.to(".popup-02-02", { opacity: 1, duration: 0.1, scale: 1, delay: 2.1 })

    // gsap.set(".popup-03-02", { opacity: 0, scale: 0})
    // gsap.to(".popup-03-02", { opacity: 1, duration: 0.1, scale: 1, delay: 2.2 })

    // gsap.set(".popup-04-02", { opacity: 0, scale: 0})
    // gsap.to(".popup-04-02", { opacity: 1, duration: 0.1, scale: 1, delay: 2.3 })

    // gsap.set(".popup-05-02", { opacity: 0, scale: 0})
    // gsap.to(".popup-05-02", { opacity: 1, duration: 0.1, scale: 1, delay: 2.4 })

    // gsap.set(".popup-06-02", { opacity: 0, scale: 0})
    // gsap.to(".popup-06-02", { opacity: 1, duration: 0.1, scale: 1, delay: 2.5 })

    // gsap.set(".popup-07-02", { opacity: 0, scale: 0})
    // gsap.to(".popup-07-02", { opacity: 1, duration: 0.1, scale: 1, delay: 2.6 })

    // gsap.set(".popup-08-02", { opacity: 0, scale: 0})
    // gsap.to(".popup-08-02", { opacity: 1, duration: 0.1, scale: 1, delay: 2.7 })

    // gsap.set(".popup-09-02", { opacity: 0, scale: 0})
    // gsap.to(".popup-09-02", { opacity: 1, duration: 0.1, scale: 1, delay: 2.8 })

    // gsap.set(".popup-10-02", { opacity: 0, scale: 0})
    // gsap.to(".popup-10-02", { opacity: 1, duration: 0.1, scale: 1, delay: 2.9 })

    // gsap.set(".popup-11-02", { opacity: 0, scale: 0})
    // gsap.to(".popup-11-02", { opacity: 1, duration: 0.1, scale: 1, delay: 3 })

    gsap.set(".popup-17", { opacity: 0, scale: 0})
    gsap.to(".popup-17", { opacity: 1, duration: 0.1, scale: 1, delay: 1.2 })

    //////////////////////////////

    // gsap.set(".popup-01-03", { opacity: 0, scale: 0})
    // gsap.to(".popup-01-03", { opacity: 1, duration: 0.1, scale: 1, delay: 5 })

    // gsap.set(".popup-02-03", { opacity: 0, scale: 0})
    // gsap.to(".popup-02-03", { opacity: 1, duration: 0.1, scale: 1, delay: 5.1 })

    // gsap.set(".popup-03-03", { opacity: 0, scale: 0})
    // gsap.to(".popup-03-03", { opacity: 1, duration: 0.1, scale: 1, delay: 5.2 })

    // gsap.set(".popup-04-03", { opacity: 0, scale: 0})
    // gsap.to(".popup-04-03", { opacity: 1, duration: 0.1, scale: 1, delay: 5.3 })

    // gsap.set(".popup-05-03", { opacity: 0, scale: 0})
    // gsap.to(".popup-05-03", { opacity: 1, duration: 0.1, scale: 1, delay: 5.4 })

    gsap.set(".popup-06-03", { opacity: 0, scale: 0})
    gsap.to(".popup-06-03", { opacity: 1, duration: 0.1, scale: 1, delay: 7.5 })

    gsap.set(".popup-07-03", { opacity: 0, scale: 0})
    gsap.to(".popup-07-03", { opacity: 1, duration: 0.1, scale: 1, delay: 7.6 })

    gsap.set(".popup-08-03", { opacity: 0, scale: 0})
    gsap.to(".popup-08-03", { opacity: 1, duration: 0.1, scale: 1, delay: 7.7 })

    gsap.set(".popup-09-03", { opacity: 0, scale: 0})
    gsap.to(".popup-09-03", { opacity: 1, duration: 0.1, scale: 1, delay: 7.8 })

    gsap.set(".popup-10-03", { opacity: 0, scale: 0})
    gsap.to(".popup-10-03", { opacity: 1, duration: 0.1, scale: 1, delay: 7.9 })

    gsap.set(".popup-11-03", { opacity: 0, scale: 0})
    gsap.to(".popup-11-03", { opacity: 1, duration: 0.1, scale: 1, delay: 8 })

    gsap.set(".popup-01-04", { opacity: 0, scale: 0})
    gsap.to(".popup-01-04", { opacity: 1, duration: 0.1, scale: 1.3, delay: 8.1 })

    gsap.set(".popup-02-04", { opacity: 0, scale: 0})
    gsap.to(".popup-02-04", { opacity: 1, duration: 0.1, scale: 1, delay: 8.2 })

    gsap.set(".popup-17-03", { opacity: 0, scale: 0})
    gsap.to(".popup-17-03", { opacity: 1, duration: 0.1, scale: 1, delay: 8.5 })

    // gsap.set(".popup-03-04", { opacity: 0, scale: 0})
    // gsap.to(".popup-03-04", { opacity: 1, duration: 0.1, scale: 1, delay: 6.3 })

    // gsap.set(".popup-04-04", { opacity: 0, scale: 0})
    // gsap.to(".popup-04-04", { opacity: 1, duration: 0.1, scale: 1, delay: 6.4 })

    // gsap.set(".popup-05-04", { opacity: 0, scale: 0})
    // gsap.to(".popup-05-04", { opacity: 1, duration: 0.1, scale: 1, delay: 6.5 })

    // gsap.set(".popup-06-04", { opacity: 0, scale: 0})
    // gsap.to(".popup-06-04", { opacity: 1, duration: 0.1, scale: 1, delay: 6.6 })

    // gsap.set(".popup-07-04", { opacity: 0, scale: 0})
    // gsap.to(".popup-07-04", { opacity: 1, duration: 0.1, scale: 1, delay: 6.7 })

    // gsap.set(".popup-08-04", { opacity: 0, scale: 0})
    // gsap.to(".popup-08-04", { opacity: 1, duration: 0.1, scale: 1, delay: 6.8 })

    // gsap.set(".popup-09-04", { opacity: 0, scale: 0})
    // gsap.to(".popup-09-04", { opacity: 1, duration: 0.1, scale: 1, delay: 6.9 })

    // gsap.set(".popup-10-04", { opacity: 0, scale: 0})
    // gsap.to(".popup-10-04", { opacity: 1, duration: 0.1, scale: 1, delay: 7 })

    // gsap.set(".popup-11-04", { opacity: 0, scale: 0})
    // gsap.to(".popup-11-04", { opacity: 1, duration: 0.1, scale: 1, delay: 7.1 })

    // gsap.set(".popup-12-04", { opacity: 0, scale: 0})
    // gsap.to(".popup-12-04", { opacity: 1, duration: 0.1, scale: 1, delay: 11 })

    //////////////////////////////

    // gsap.set(".popup-01-05", { opacity: 0, scale: 0})
    // gsap.to(".popup-01-05", { opacity: 1, duration: 0.1, scale: 1.3, delay: 10 })

    // gsap.set(".popup-02-05", { opacity: 0, scale: 0})
    // gsap.to(".popup-02-05", { opacity: 1, duration: 0.1, scale: 1, delay: 10.1 })

    // gsap.set(".popup-03-05", { opacity: 0, scale: 0})
    // gsap.to(".popup-03-05", { opacity: 1, duration: 0.1, scale: 1, delay: 10.2 })

    // gsap.set(".popup-04-05", { opacity: 0, scale: 0})
    // gsap.to(".popup-04-05", { opacity: 1, duration: 0.1, scale: 1, delay: 10.3 })

    // gsap.set(".popup-05-05", { opacity: 0, scale: 0})
    // gsap.to(".popup-05-05", { opacity: 1, duration: 0.1, scale: 1, delay: 10.4 })

    // gsap.set(".popup-06-05", { opacity: 0, scale: 0})
    // gsap.to(".popup-06-05", { opacity: 1, duration: 0.1, scale: 1, delay: 10.5 })

    // gsap.set(".popup-07-05", { opacity: 0, scale: 0})
    // gsap.to(".popup-07-05", { opacity: 1, duration: 0.1, scale: 1, delay: 10.6 })

    gsap.set(".popup-08-05", { opacity: 0, scale: 0})
    gsap.to(".popup-08-05", { opacity: 1, duration: 0.1, scale: 1, delay: 10.7 })

    gsap.set(".popup-09-05", { opacity: 0, scale: 0})
    gsap.to(".popup-09-05", { opacity: 1, duration: 0.1, scale: 1, delay: 10.8 })

    gsap.set(".popup-10-05", { opacity: 0, scale: 0})
    gsap.to(".popup-10-05", { opacity: 1, duration: 0.1, scale: 1, delay: 10.9 })

    gsap.set(".popup-11-05", { opacity: 0, scale: 0})
    gsap.to(".popup-11-05", { opacity: 1, duration: 0.1, scale: 1, delay: 11 })

    gsap.set(".popup-12-05", { opacity: 0, scale: 0})
    gsap.to(".popup-12-05", { opacity: 1, duration: 0.1, scale: 1, delay: 11 })

    gsap.set(".popup-17-02", { opacity: 0, scale: 0})
    gsap.to(".popup-17-02", { opacity: 1, duration: 0.1, scale: 1, delay: 11.2 })

    ////////////// top right ////////////////

        gsap.set(".popup-01-06", { opacity: 0, scale: 0})
        gsap.to(".popup-01-06", { opacity: 1, duration: 0.1, scale: 1.3, delay: 13.1 })

        gsap.set(".popup-wagmi", { opacity: 0, scale: 0 })
        gsap.to(".popup-wagmi", { opacity: 1, duration: 0.1, scale: 1, delay: 13.2 })
    
        // gsap.set(".popup-02-06", { opacity: 0, scale: 0})
        // gsap.to(".popup-02-06", { opacity: 1, duration: 0.1, scale: 1, delay: 13.2 })
    
        // gsap.set(".popup-03-06", { opacity: 0, scale: 0})
        // gsap.to(".popup-03-06", { opacity: 1, duration: 0.1, scale: 1, delay: 13.3 })
    
        // gsap.set(".popup-04-06", { opacity: 0, scale: 0})
        // gsap.to(".popup-04-06", { opacity: 1, duration: 0.1, scale: 1, delay: 13.4 })
    
        // gsap.set(".popup-05-06", { opacity: 0, scale: 0})
        // gsap.to(".popup-05-06", { opacity: 1, duration: 0.1, scale: 1, delay: 13.5 })
    
        // gsap.set(".popup-06-06", { opacity: 0, scale: 0})
        // gsap.to(".popup-06-06", { opacity: 1, duration: 0.1, scale: 1, delay: 13.6 })
    
        gsap.set(".popup-07-06", { opacity: 0, scale: 0})
        gsap.to(".popup-07-06", { opacity: 1, duration: 0.1, scale: 1, delay: 13.7 })
    
        gsap.set(".popup-08-06", { opacity: 0, scale: 0 })
        gsap.to(".popup-08-06", { opacity: 1, duration: 0.1, scale: 1, delay: 13.8 })
    
        gsap.set(".popup-09-06", { opacity: 0, scale: 0 })
        gsap.to(".popup-09-06", { opacity: 1, duration: 0.1, scale: 1, delay: 13.9 })
    
        gsap.set(".popup-10-06", { opacity: 0, scale: 0})
        gsap.to(".popup-10-06", { opacity: 1, duration: 0.1, scale: 1, delay: 14 })
    
        gsap.set(".popup-11-06", { opacity: 0, scale: 0})
        gsap.to(".popup-11-06", { opacity: 1, duration: 0.1, scale: 1, delay: 14.1 })

        gsap.set(".popup-12-06", { opacity: 0, scale: 0})
        gsap.to(".popup-12-06", { opacity: 1, duration: 0.1, scale: 1, delay: 14.1 })

    ////////////// bottom left ////////////////

    // gsap.set(".popup-01-07", { opacity: 0, scale: 0})
    // gsap.to(".popup-01-07", { opacity: 1, duration: 0.1, scale: 1.3, delay: 16.1 })

    // gsap.set(".popup-02-07", { opacity: 0, scale: 0})
    // gsap.to(".popup-02-07", { opacity: 1, duration: 0.1, scale: 1, delay: 16.2 })

    // gsap.set(".popup-03-07", { opacity: 0, scale: 0})
    // gsap.to(".popup-03-07", { opacity: 1, duration: 0.1, scale: 1, delay: 16.3 })

    // gsap.set(".popup-04-07", { opacity: 0, scale: 0})
    // gsap.to(".popup-04-07", { opacity: 1, duration: 0.1, scale: 1, delay: 16.4 })

    // gsap.set(".popup-05-07", { opacity: 0, scale: 0})
    // gsap.to(".popup-05-07", { opacity: 1, duration: 0.1, scale: 1, delay: 16.5 })

    // gsap.set(".popup-06-07", { opacity: 0, scale: 0})
    // gsap.to(".popup-06-07", { opacity: 1, duration: 0.1, scale: 1, delay: 16.6 })

    gsap.set(".popup-07-07", { opacity: 0, scale: 0})
    gsap.to(".popup-07-07", { opacity: 1, duration: 0.1, scale: 1, delay: 16.7 })

    gsap.set(".popup-08-07", { opacity: 0, scale: 0 })
    gsap.to(".popup-08-07", { opacity: 1, duration: 0.1, scale: 1, delay: 16.8 })

    gsap.set(".popup-09-07", { opacity: 0, scale: 0 })
    gsap.to(".popup-09-07", { opacity: 1, duration: 0.1, scale: 1, delay: 16.9 })

    gsap.set(".popup-10-07", { opacity: 0, scale: 0})
    gsap.to(".popup-10-07", { opacity: 1, duration: 0.1, scale: 1, delay: 17 })

    gsap.set(".popup-11-07", { opacity: 0, scale: 0})
    gsap.to(".popup-11-07", { opacity: 1, duration: 0.1, scale: 1, delay: 17.1 })

    gsap.set(".popup-12-07", { opacity: 0, scale: 0})
    gsap.to(".popup-12-07", { opacity: 1, duration: 0.1, scale: 1, delay: 17.1 })
 }
}

 // Pop Up Click Link Overlay
 const clickLink = document.querySelector('.click-link-01')
 const link01Overlay = document.querySelector('#link01-overlay')
 const link01Vid = document.querySelector('#rikroll')
//  link01Vid.muted=true;

 clickLink.addEventListener("click", function () {
    link01Overlay.style.display = 'block'
    gsap.set(link01Overlay, { opacity: 0, scale: 0})
    gsap.to(link01Overlay, { opacity: 1, duration: 0.2, scale: 1 })
    // link01Vid.muted=false;

    link01Vid.src = "https://player.vimeo.com/video/440418225?h=5506803932&autoplay=1"
 })

//  $(document).ready(function() {
//     $('#play-video').on('click', function(ev) {
   
//       $("#video")[0].src += "&autoplay=1";
//       ev.preventDefault();
   
//     });
//   });