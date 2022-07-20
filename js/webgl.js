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

// add some lighting
const ambientLight = new THREE.AmbientLight(0x777777)
scene.add(ambientLight)

// add spotlight
const pointLight = new THREE.PointLight(0xffffff, 1, 0)
pointLight.position.set(600, 600, -2500)
scene.add(pointLight)


const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = -1000



// make sphere
const makeSphere = function () {
    const dpi = 6
    const geometry = new THREE.SphereGeometry(40, 10, 10)
    const material = new THREE.MeshLambertMaterial( { 
    color: 0xFF3E19,
    // vertexShader: vert,
    // fragmentShader: frag,
    wireframe: true,
    })
    
    const sphere = new THREE.Mesh(geometry, material);
    // sphere.rotation.x = 1;

    scene.add( sphere );
}

makeSphere()


const animate = function () {
    camera.lookAt(scene.position)

    renderer.render(scene, camera)

    requestAnimationFrame(animate)
}

animate()

window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()

    renderer.setSize(window.innerWidth, window.innerHeight)
})