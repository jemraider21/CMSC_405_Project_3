import * as THREE from 'three';
import { Colors } from './Colors';

class ShapeFactory{
    static Cube = new ShapeFactory('Cube');
    static Pyramid = new ShapeFactory('Pyramid');
    static Sphere = new ShapeFactory('Sphere');
    static Cylinder = new ShapeFactory('Cylinder');
    static Cone = new ShapeFactory('Cone');
    static Rectangle = new ShapeFactory('Rectangle');

    constructor(shapeName){
        this.shapeName = shapeName;
    }

    static createRandomShape(xPosition, yPosition, zPosition){
        const shapes = [this.Cube, this.Pyramid, this.Sphere, this.Cylinder, this.Cone, this.Rectangle];
        const randomNumber = Math.floor(Math.random() * shapes.length) + 1;
        const randomShape = shapes[randomNumber - 1];
        const randomColor = Colors.createRandomColor();

        console.log(`Creating a ${randomShape.shapeName} with color ${randomColor.colorName}`);
        return randomShape.createShape(xPosition, yPosition, zPosition, randomColor.getColorRepresentation());
    }

    createShape(xPosition, yPosition, zPosition, colorRepresentation){
        switch(this.shapeName){
            case 'Cube':
                return this.#createCube(xPosition, yPosition, zPosition, colorRepresentation);
            case 'Pyramid':
                return this.#createPyramid(xPosition, yPosition, zPosition, colorRepresentation);
            case 'Sphere':
                return this.#createSphere(xPosition, yPosition, zPosition, colorRepresentation);
            case 'Cylinder':
                return this.#createCylinder(xPosition, yPosition, zPosition, colorRepresentation);
            case 'Cone':
                return this.#createCone(xPosition, yPosition, zPosition, colorRepresentation);
            case 'Rectangle':
                return this.#createRectangle(xPosition, yPosition, zPosition, colorRepresentation);
            default:
                throw new Error('Invalid shape name');
        }
    }

    #createCube(xPosition, yPosition, zPosition, colorRepresentation) {
        // Create a cube
        const cubeGeometry = new THREE.BoxGeometry();
        const cubeMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    
        // Set the cube in the upper left corner
        cube.position.x = xPosition;
        cube.position.y = yPosition;
        cube.position.z = zPosition;
    
        return cube;
    }

    #createPyramid(xPosition, yPosition, zPosition, colorRepresentation) {
        // Create a pyramid
        const pyramidGeometry = new THREE.ConeGeometry(2, 4, 4);
        const pyramidMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
    
        // Set the pyramid in the upper right corner
        pyramid.position.x = xPosition;
        pyramid.position.y = yPosition;
        pyramid.position.z = zPosition;
    
        return pyramid;
    }

    #createSphere(xPosition, yPosition, zPosition, colorRepresentation) {
        // Create a sphere
        const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    
        // Set the sphere in the lower right corner
        sphere.position.x = xPosition;
        sphere.position.y = yPosition;
        sphere.position.z = zPosition;
    
        return sphere;
    }

    #createCylinder(xPosition, yPosition, zPosition, colorRepresentation) {
        // Create a cylinder
        const cylinderGeometry = new THREE.CylinderGeometry(2, 2, 4, 32);
        const cylinderMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    
        // Set the cylinder in the lower left corner
        cylinder.position.x = xPosition;
        cylinder.position.y = yPosition;
        cylinder.position.z = zPosition;
    
        return cylinder;
    }

    #createCone(xPosition, yPosition, zPosition, colorRepresentation) {
        // Create a cone
        const coneGeometry = new THREE.ConeGeometry(2, 4, 32);
        const coneMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const cone = new THREE.Mesh(coneGeometry, coneMaterial);
    
        // Set the cone in the center
        cone.position.x = xPosition;
        cone.position.y = yPosition;
        cone.position.z = zPosition;
    
        return cone;
    }

    #createRectangle(xPosition, yPosition, zPosition, colorRepresentation) {
        // Create a rectangle
        const rectangleGeometry = new THREE.BoxGeometry(2, 4, 2);
        const rectangleMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
    
        // Set the rectangle in the center
        rectangle.position.x = xPosition;
        rectangle.position.y = yPosition;
        rectangle.position.z = zPosition;
    
        return rectangle;
    }
}

export { ShapeFactory };