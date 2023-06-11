import * as THREE from 'three';



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.background = new THREE.Color("black")
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


function trees(){
    const geometry = new THREE.BoxGeometry( 0.7, 2, 1);
    const material = new THREE.MeshBasicMaterial( { color: 0x240800 } );
    const cube = new THREE.Mesh( geometry, material );
    cube.position.x=2
    cube.position.y=2
    cube.position.z= 0
    cube.rotation.x = 0;
    cube.rotation.z= 0
    cube.rotation.y = 0;
    scene.add( cube );

    const triangle = new THREE.TetrahedronGeometry(1.2,4)
    const color = new THREE.MeshBasicMaterial({color: 0x006800})
    const tri = new THREE.Mesh(triangle,color);
    tri.position.x=2
    tri.position.y=3
    tri.position.z= 0
    tri.rotation.x = 0;
    tri.rotation.z= 0
    tri.rotation.y = 0;
    scene.add( tri );
}





function ground(){
    const geometry = new THREE.BoxGeometry( 10, 2, 4 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00240a } );
    const cube = new THREE.Mesh( geometry, material );
    cube.position.x=1
    cube.position.y=0
    cube.position.z= 0
    scene.add( cube );
}




ground()
trees()

camera.position.z = 5;
camera.position.y =3;
camera.position.x= 1;
camera.rotation.x=-0.1
camera.rotation.y=-0.2
camera.rotation.z=0





renderer.render( scene, camera );
