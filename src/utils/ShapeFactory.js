import * as THREE from 'three';

const createCube = function() {
    // Create a cube
    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    // Set the cube in the upper left corner
    cube.position.x = -5;
    cube.position.y = 2;

    return cube;
}

const createPyramid = function() {
    // Create a pyramid
    const pyramidGeometry = new THREE.ConeGeometry(2, 4, 4);
    const pyramidMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);

    // Set the pyramid in the upper right corner
    pyramid.position.x = 20;
    pyramid.position.y = 7;
    pyramid.position.z = -10;

    return pyramid;
}

export { createCube, createPyramid };