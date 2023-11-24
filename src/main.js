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

const shape1 = ShapeFactory.createRandomShape(-5, 2, -10);
scene.add(shape1);

const shape2 = ShapeFactory.createRandomShape(20, 7, -10);
scene.add(shape2);


// Animation loop
const animate = () => {
  requestAnimationFrame(animate);
  const shapes = [shape1, shape2];
  shapes.forEach(shape => {
    shape.rotation.x += 0.01;
    shape.rotation.y += 0.01;
  });
  renderer.render(scene, camera);
};

animate();