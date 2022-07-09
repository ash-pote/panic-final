const webglDiv = document.querySelector(".webgl-box")

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, webglDiv.clientWidth / webglDiv.clientHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize( (webglDiv.clientWidth) - 6, (webglDiv.clientHeight) - 6 );
webglDiv.appendChild( renderer.domElement );


const dpi = 8
const geometry = new THREE.SphereGeometry(3.3, dpi, dpi);
const material = new THREE.ShaderMaterial( { 
    color: 0xFF3E19,
    vertexShader: vert,
    fragmentShader: frag,
    wireframe: true
} );

const cube = new THREE.Mesh( geometry, material );
// cube.rotation.x = 1;

scene.add( cube );

camera.position.z = 6.5;



function animate() {
	requestAnimationFrame( animate );
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
}

animate();