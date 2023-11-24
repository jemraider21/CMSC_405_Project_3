import * as THREE from 'three';
import { Colors } from './Colors';

class ShapeFactory{
    static Cube = new ShapeFactory('Cube');
    static Pyramid = new ShapeFactory('Pyramid');
    constructor(shapeName){
        this.shapeName = shapeName;
    }

    static createRandomShape(xPostion, yPosition, zPosition){
        const shapes = [this.Cube, this.Pyramid];
        const randomNumber = Math.floor(Math.random() * shapes.length) + 1;
        return shapes[randomNumber - 1].createShape(xPostion, yPosition, zPosition, Colors.createRandomColor());
    }

    createShape(xPostion, yPosition, zPosition, colorRepresentation){
        switch(this.shapeName){
            case 'Cube':
                return this.#createCube(xPostion, yPosition, zPosition, colorRepresentation);
            case 'Pyramid':
                return this.#createPyramid(xPostion, yPosition, zPosition, colorRepresentation);
            default:
                throw new Error('Invalid shape name');
        }
    }

    #createCube = function(xPostion, yPosition, zPosition, colorRepresentation) {
        // Create a cube
        const cubeGeometry = new THREE.BoxGeometry();
        const cubeMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    
        // Set the cube in the upper left corner
        cube.position.x = xPostion;
        cube.position.y = yPosition;
        cube.position.z = zPosition;
    
        return cube;
    }

    #createPyramid = function(xPostion, yPosition, zPosition, colorRepresentation) {
        // Create a pyramid
        const pyramidGeometry = new THREE.ConeGeometry(2, 4, 4);
        const pyramidMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
    
        // Set the pyramid in the upper right corner
        pyramid.position.x = xPostion;
        pyramid.position.y = yPosition;
        pyramid.position.z = zPosition;
    
        return pyramid;
    }
}

export { ShapeFactory };