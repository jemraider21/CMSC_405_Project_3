import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
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

const controls = new OrbitControls(camera, renderer.domElement);
camera.position.set(0, 20, 20);
controls.update();

// Create a map to hold all of the shapes for later actions
const shapes = new Map();
[
  {x: -15, y: 7, name: "Shape 1"}, {x: 0, y: 7, name: "Shape 2"}, {x: 15, y: 7, name: "Shape 3"}, 
  {x: -15, y: -7, name: "Shape 4"}, {x: 0, y: -7, name: "Shape 5"}, {x: 15, y: -7, name: "Shape 6"}
].forEach((shapeAttributes) => {
    const shape = ShapeFactory.createRandomShape(shapeAttributes.x, shapeAttributes.y, shapeAttributes.name);
    scene.add(shape);
    shapes.set(shape.name, shape);
});

// Animation loop
const animate = () => {
  requestAnimationFrame(animate);
  shapes.forEach(shape => {
    shape.rotation.x += 0.01;
    shape.rotation.y += 0.01;
  });
  controls.update();
  renderer.render(scene, camera);
};

animate();

const shapeDropdown = document.getElementById('shapeDropdown');
const toggleButton = document.getElementById('toggleShape');

// Change the text of the toggle button when the shape dropdown changes
shapeDropdown.addEventListener('change', () => {
  const selectedShape = shapeDropdown.value;
  console.log(`Selected shape: ${selectedShape}`);
  const shape = shapes.get(selectedShape);
  if(shape.visible){
    toggleButton.innerText = `Hide ${selectedShape}`;
  } else {
    toggleButton.innerText = `Show ${selectedShape}`;
  }
});

// Toggle the visibility of the selected shape and change the text of the toggle button
toggleButton.addEventListener('click', () => {
  const selectedShape = shapeDropdown.value;
  const shape = shapes.get(selectedShape);
  shape.visible = !shape.visible;
  if(shape.visible){
    alert(`${shape.name} is now visible`);
    toggleButton.innerText = `Hide ${selectedShape}`;
  } else {
    alert(`${shape.name} is now hidden`);
    toggleButton.innerText = `Show ${selectedShape}`;
  }
});