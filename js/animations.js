// Melting Image
const tongueImagePop = document.querySelector(".popup-17-02")
const tongueImage = document.querySelector(".popup-17-02 img")
const tongueImageSource  = tongueImage.getAttribute("src")

console.log(tongueImage)

tongueImagePop.innerHTML = ""

// set up a pix applicatiom
const app = new PIXI.Application({
    width: 148,
    height: 148,
    transparent: true
})

// add the pixi application to the section tag
tongueImagePop.appendChild(app.view)

// make a new image
let image = null
let displacementImage = null

// make a new loader
const loader = new PIXI.loaders.Loader()

// load in our image
loader.add("image", tongueImageSource)
loader.add("displacement", "/img/displacement2.jpg")
loader.load((loader, resources) => {
    // once the image has loaded, now do things
    image = new PIXI.Sprite(resources.image.texture)
    displacementImage = new PIXI.Sprite(resources.displacement.texture)

    image.x = 80
    image.y = 80
    image.width = 160
    image.height = 160
    image.interactive = true

    image.anchor.x = 0.5
    image.anchor.y = 0.5

    displacementImage.width = 80
    displacementImage.height = 80
    displacementImage.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT

    image.filters = [
        // new PIXI.filters.BlurFilter(50, 5),
        new PIXI.filters.DisplacementFilter(displacementImage, 3)
    ]

    // add image to the app
    app.stage.addChild(image)
    app.stage.addChild(displacementImage)

    // add some rotation
    app.ticker.add(() => {
        // displacementImage.x = displacementImage.x + 1
        displacementImage.y = displacementImage.y + 0.8
    })
})



// const audio = document.getElementById("my_audio");
// window.addEventListener('load', (event) => {
//     audio.play()
// })

// square animation
// anime({
//     targets: '.square',
//     points: [
//       { value: [
//         '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369',
//         '70 41 118.574 59.369 111.145 132.631 60.855 84.631 20.426 60.369']
//       },
//       { value: '70 6 119.574 60.369 100.145 117.631 39.855 117.631 55.426 68.369' },
//       { value: '70 57 136.574 54.369 89.145 100.631 28.855 132.631 38.426 64.369' },
//       { value: '70 24 119.574 60.369 100.145 117.631 50.855 101.631 3.426 54.369' }
//     ],
//     easing: 'easeOutQuad',
//     duration: 2000,
//     loop: true
//   });

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
// about overlay
const aboutLink = document.querySelector('.about-link')
const aboutOverlay = document.querySelector('#about-overlay')
const closeAbout = document.querySelector('#close-about')

aboutLink.addEventListener("click", function () {
    aboutOverlay.style.display = 'flex'

    gsap.set(aboutOverlay, { scale: 0})
    gsap.to(aboutOverlay, { duration: 0.3, scale: 1, delay: 0.5 })
})

closeAbout.addEventListener("click", function () {
    aboutOverlay.style.display = 'none'

    gsap.set(aboutOverlay, { scale: 1})
    gsap.to(aboutOverlay, { duration: 0.3, scale: 0, delay: 0.5 })
})

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

//////////////////////////////////////
/* orb animation */
// const orb = document.querySelector(".orb")

// const orbTimeline = gsap.timeline({
//     repeat: -1,
//     yoyo: true
// })

// orbTimeline
// .set(orb, { x: 0 })
// .to(orb, { x: -500, y: 90, duration: 5, ease: "linear" })
// .to(orb, { x: -700, y: 400, duration: 8, ease: "linear" })
// .to(orb, { x: 700, y: 100, duration: 5, ease: "linear" })
// .to(orb, { x: -500, y: 90, duration: 5, ease: "linear" })

/////////////////////////////////////////
// Countdown
const ejectBtn = document.querySelector('.eject-btn')
const countdownOverlay = document.querySelector('#countdown-overlay')

const serverOverlay = document.querySelector('#server-overlay')

const body = document.querySelector('body')


setInterval( function(){ 
    ejectBtn.addEventListener("click", function () {
        countdownOverlay.style.display = 'flex'
    
        // Countdown Number Animation
        let countdownNumberEl = document.getElementById('countdown-number');
        let countdown = 10;
    
        countdownNumberEl.textContent = countdown;
        
        const countdownInterval = setInterval(countdownTimer, 1000);
    
        function stopInterval() {
            clearInterval(countdownInterval);
          }
    
        function countdownTimer () {
            if (countdown === 0) {
                stopInterval()
    
                countdownOverlay.style.display = 'none'
    
                serverOverlay.style.display = 'flex'
            } else {
                countdown = --countdown <= -1 ? 10 : countdown;
    
                countdownNumberEl.textContent = countdown;
            }
        }
    })
}, 10000);

// Page Shake & audio
var pingSound = document.getElementById("my_audio");

ejectBtn.addEventListener("click", function () {
    pingSound.play()

    gsap.set(body, {x:"0"})
    gsap.to(body, 0.1, {x:"-=20", yoyo:true, repeat: 9})
    gsap.to(body, 0.1, {x:"0"})
})

//////////////////////////////////////////
// Flag

// const section = document.querySelector("body");

// var scene = new THREE.Scene();
// var camera = new THREE.PerspectiveCamera( 75, section.clientWidth / section.clientHeight, 0.1, 1000);

// var renderer = new THREE.WebGLRenderer({ 
//     alpha: true,
//     antialias: true
//  });
// renderer.setSize( section.clientWidth, section.clientHeight );
// section.appendChild( renderer.domElement );

// var geometry = new THREE.PlaneGeometry(5, 3, 15, 9);
// var material = new THREE.MeshBasicMaterial( { 
//     color: 0xff0000,
//     wireframe: true
// });
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// function animate() {
//     cube.rotation.x += 0.01;
//     cube.rotation.y += 0.01;

//     requestAnimationFrame( animate );
//     renderer.render( scene, camera );
// }
// animate();