import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a cube
const cubeGeometry = new THREE.BoxGeometry();
const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

// Set the cube in the upper left corner
cube.position.x = -5;
cube.position.y = 2;
scene.add(cube);

// Create a pyramid
const pyramidGeometry = new THREE.ConeGeometry(2, 4, 4);
const pyramidMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);

// Set the pyramid in the upper right corner
pyramid.position.x = 20;
pyramid.position.y = 7;
pyramid.position.z = -10;
scene.add(pyramid);


// Animation loop
const animate = () => {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  pyramid.rotation.x += 0.01;
  pyramid.rotation.y += 0.01;
  renderer.render(scene, camera);
};

animate();