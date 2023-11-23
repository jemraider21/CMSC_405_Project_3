import * as THREE from 'three';
import { ShapeFactory } from './utils/ShapeFactory';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cube = ShapeFactory.Cube.createShape(-5, 2, 0, 0x00ff00);
scene.add(cube);

const pyramid = ShapeFactory.Pyramid.createShape(20, 7, -10, 0xff0000);
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