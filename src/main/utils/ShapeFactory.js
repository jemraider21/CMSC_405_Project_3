import * as THREE from 'three';
import { Colors } from './Colors';

 export class ShapeFactory{
    static Cube = new ShapeFactory('Cube');
    static Pyramid = new ShapeFactory('Pyramid');
    static Sphere = new ShapeFactory('Sphere');
    static Cylinder = new ShapeFactory('Cylinder');
    static Cone = new ShapeFactory('Cone');
    static Rectangle = new ShapeFactory('Rectangle');
    zPosition = -10;

    constructor(shapeName){
        this.shapeName = shapeName;
    }

    static createRandomShape(xPosition, yPosition){
        const shapes = [this.Cube, this.Pyramid, this.Sphere, this.Cylinder, this.Cone, this.Rectangle];
        const randomNumber = Math.floor(Math.random() * shapes.length) + 1;
        const randomShape = shapes[randomNumber - 1];
        const randomColor = Colors.createRandomColor();

        console.log(`Creating a ${randomShape.shapeName} with color ${randomColor.colorName}`);
        return randomShape.createShape(xPosition, yPosition, randomColor.getColorRepresentation());
    }

    createShape(xPosition, yPosition, colorRepresentation){
        switch(this.shapeName){
            case 'Cube':
                return this.#createCube(xPosition, yPosition, colorRepresentation);
            case 'Pyramid':
                return this.#createPyramid(xPosition, yPosition, colorRepresentation);
            case 'Sphere':
                return this.#createSphere(xPosition, yPosition, colorRepresentation);
            case 'Cylinder':
                return this.#createCylinder(xPosition, yPosition, colorRepresentation);
            case 'Cone':
                return this.#createCone(xPosition, yPosition, colorRepresentation);
            case 'Rectangle':
                return this.#createRectangle(xPosition, yPosition, colorRepresentation);
            default:
                throw new Error('Invalid shape name');
        }
    }

    #createCube(xPosition, yPosition, colorRepresentation) {
        // Create a cube
        const cubeGeometry = new THREE.BoxGeometry();
        const cubeMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    
        // Set the cube in the upper left corner
        cube.position.x = xPosition;
        cube.position.y = yPosition;
        cube.position.z = this.zPosition;
    
        return cube;
    }

    #createPyramid(xPosition, yPosition, colorRepresentation) {
        // Create a pyramid
        const pyramidGeometry = new THREE.ConeGeometry(2, 4, 4);
        const pyramidMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
    
        // Set the pyramid in the upper right corner
        pyramid.position.x = xPosition;
        pyramid.position.y = yPosition;
        pyramid.position.z = this.zPosition;
    
        return pyramid;
    }

    #createSphere(xPosition, yPosition, colorRepresentation) {
        // Create a sphere
        const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    
        // Set the sphere in the lower right corner
        sphere.position.x = xPosition;
        sphere.position.y = yPosition;
        sphere.position.z = this.zPosition;
    
        return sphere;
    }

    #createCylinder(xPosition, yPosition, colorRepresentation) {
        // Create a cylinder
        const cylinderGeometry = new THREE.CylinderGeometry(2, 2, 4, 32);
        const cylinderMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
    
        // Set the cylinder in the lower left corner
        cylinder.position.x = xPosition;
        cylinder.position.y = yPosition;
        cylinder.position.z = this.zPosition;
    
        return cylinder;
    }

    #createCone(xPosition, yPosition, colorRepresentation) {
        // Create a cone
        const coneGeometry = new THREE.ConeGeometry(2, 4, 32);
        const coneMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const cone = new THREE.Mesh(coneGeometry, coneMaterial);
    
        // Set the cone in the center
        cone.position.x = xPosition;
        cone.position.y = yPosition;
        cone.position.z = this.zPosition;
    
        return cone;
    }

    #createRectangle(xPosition, yPosition, colorRepresentation) {
        // Create a rectangle
        const rectangleGeometry = new THREE.BoxGeometry(2, 4, 2);
        const rectangleMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
    
        // Set the rectangle in the center
        rectangle.position.x = xPosition;
        rectangle.position.y = yPosition;
        rectangle.position.z = this.zPosition;
    
        return rectangle;
    }
}