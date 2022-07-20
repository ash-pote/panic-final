const section = document.querySelector("section#pop-up-section");

var backgroundScene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, section.clientWidth / section.clientHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer({ 
    alpha: true,
    antialias: true
 });

renderer.setSize( section.clientWidth, section.clientHeight );
section.appendChild( renderer.domElement );

var geometry = new THREE.PlaneGeometry(5, 3, 15, 9);
var material = new THREE.MeshBasicMaterial( { 
    color: 0xff0000,
    wireframe: true
});
var cube = new THREE.Mesh( geometry, material );
backgroundScene.add( cube );

camera.position.z = 5;

function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    requestAnimationFrame( animate );
    renderer.render( backgroundScene, camera );
}

animate();