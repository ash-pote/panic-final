const webglDiv = document.querySelector(".webgl-box")

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, webglDiv.clientWidth / webglDiv.clientHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize( (webglDiv.clientWidth) - 6, (webglDiv.clientHeight) - 6 );
webglDiv.appendChild( renderer.domElement );

const clock = new THREE.Clock()

const uniforms = {
    time: { value: clock.getElapsedTime() },
    seed: { value: Math.random() }
}

const dpi = 20
const geometry = new THREE.SphereGeometry(3, 2 * dpi, dpi);
const material = new THREE.ShaderMaterial({ 
    uniforms: uniforms,
    vertexShader: vert,
    fragmentShader: frag
    // color: 0xFF3E19,
    // wireframe: true
});
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 7;



function animate() {
    uniforms.time = { value: clock.getElapsedTime() }

	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}

animate();