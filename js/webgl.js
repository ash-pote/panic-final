// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
// renderer.setSize( (window.innerWidth) - 6, (window.innerHeight) - 6 );

// const webglDiv = document.querySelector(".webgl-box")
// webglDiv.appendChild( renderer.domElement );


// const dpi = 6
// const geometry = new THREE.SphereGeometry(0.34, dpi, dpi);
// const material = new THREE.ShaderMaterial( { 
//     color: 0xFF3E19,
    // vertexShader: vert,
    // fragmentShader: frag,
//     wireframe: true
// } );

// const cube = new THREE.Mesh( geometry, material );
// cube.rotation.x = 1;

// scene.add( cube );

// camera.position.z = 6.5;



// function animate() {
// 	requestAnimationFrame( animate );
//     cube.rotation.y += 0.01;
// 	renderer.render( scene, camera );
// }

// animate();



const renderer = new THREE.WebGLRenderer({
    antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
renderer.setClearColor(0x000000, 1)

const bodyTag = document.querySelector("body")
bodyTag.appendChild(renderer.domElement)

const scene = new THREE.Scene()
const clock = new THREE.Clock()

// add some lighting
const ambientLight = new THREE.AmbientLight(0x777777)
scene.add(ambientLight)

// add spotlight
const pointLight = new THREE.PointLight(0xffffff, 1, 0)
pointLight.position.set(0, 2000, 1000)
scene.add(pointLight)


const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 300

// Make a THREE.js loader
// const loader = new THREE.TextureLoader()

// const webglDiv = document.querySelector(".webgl-box")

// make sphere
const makeSphere = function () {
        const dpi = 6
        const geometry = new THREE.SphereGeometry(12, 10, 10)
        const material = new THREE.MeshLambertMaterial({ 
        color: 0xF52700,
        // vertexShader: vert,
        // fragmentShader: frag,
        wireframe: true,
    })
    
    const sphereMesh = new THREE.Mesh(geometry, material);

    scene.add( sphereMesh );
    
    return sphereMesh
}

// make ring
const makeRing = function (width, color) {
    const geometry = new THREE.TorusGeometry( 20, 0.3, 13, 74, 7)
    const material = new THREE.MeshLambertMaterial({
        color: 0xF52700
    })
    const meshRing = new THREE.Mesh(geometry, material)

    meshRing.geometry.rotateX(Math.PI / 2)
    meshRing.geometry.rotateZ(Math.PI / 10)

    scene.add(meshRing)
    return meshRing
}

// make cylinder
const makeCylinder = function (width, color) {
    const geometry = new THREE.CylinderGeometry( 8, 8, 8, 8, 32 )
    const material = new THREE.MeshLambertMaterial({
        color: 0xF52700
    })
    const meshCylinder = new THREE.Mesh(geometry, material)

    // meshCylinder.geometry.rotateX(Math.PI / 2)
    // meshCylinder.geometry.rotateZ(Math.PI / 10)

    scene.add(meshCylinder)
    return meshCylinder
}


const sphere = makeSphere()
// animate sphere
const sphereTimeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
})
sphereTimeline.set(sphere.position, { x: -300, y: 0 });
sphereTimeline.to(sphere.position, { duration: 10, x: 320, y: 130, ease: "linear", delay: 2 });
sphereTimeline.to(sphere.position, { duration: 9, x: -200, y: -200, ease: "linear" });


const ring1 = makeRing(100, 0xF52700)
// animate ring
const ringOneTimeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
})
ringOneTimeline.set(ring1.position, { x: 300, y: 0 });
ringOneTimeline.to(ring1.position, { duration: 9, x: -200, y: -80, ease: "linear", delay: 5 });
ringOneTimeline.to(ring1.position, { duration: 9, x: 300, y: 200, ease: "linear" });

const cylinder = makeCylinder()
const cylinderGroup = new THREE.Group()
cylinderGroup.add(cylinder)
scene.add(cylinderGroup)

cylinderGroup.add(cylinder)
// cylinder.translateX(120)
// animate cylinder
const cylinderTimeline = gsap.timeline({
    repeat: -1,
    yoyo: true,
})
cylinderTimeline.set(cylinder.position, { x: 300, y: -200 });
cylinderTimeline.to(cylinder.position, { duration: 10, x: 20, y: 300, ease: "linear", delay: 6 });
cylinderTimeline.to(cylinder.position, { duration: 8, x: -200, y: -180, ease: "linear" });


const animate = function () {
    camera.lookAt(scene.position)

    // Sphere
    sphere.rotateY(0.18)

    // sphere.position.x = 0

    // Ring
    ring1.geometry.rotateY(0.18)
    // ring1.position.x = 56

    // Cylinder
    cylinder.geometry.rotateX(0.07)
    cylinder.geometry.rotateY(0.07)
    // cylinder.position.x = 120
    // cylinderGroup.position.x = cylinderGroup * Math.sin(0.03)
    cylinder.translateX(Math.sin(0.1 * 0.1 * 0.1))

    renderer.render(scene, camera)

    requestAnimationFrame(animate)
}

animate()

window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
})