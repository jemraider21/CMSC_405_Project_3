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

    static createRandomShape(xPosition, yPosition, shapeName){
        const shapes = [this.Cube, this.Pyramid, this.Sphere, this.Cylinder, this.Cone, this.Rectangle];
        const randomNumber = Math.floor(Math.random() * shapes.length) + 1;
        const randomShape = shapes[randomNumber - 1];
        const randomColor = Colors.createRandomColor();

        console.log(`Creating a ${randomShape.shapeName} with color ${randomColor.colorName}`);
        return randomShape.createShape(xPosition, yPosition, randomColor.getColorRepresentation(), shapeName);
    }

    createShape(xPosition, yPosition, colorRepresentation, shapeName){
        switch(this.shapeName){
            case 'Cube':
                return this.#createCube(xPosition, yPosition, colorRepresentation, shapeName);
            case 'Pyramid':
                return this.#createPyramid(xPosition, yPosition, colorRepresentation, shapeName);
            case 'Sphere':
                return this.#createSphere(xPosition, yPosition, colorRepresentation, shapeName);
            case 'Cylinder':
                return this.#createCylinder(xPosition, yPosition, colorRepresentation, shapeName);
            case 'Cone':
                return this.#createCone(xPosition, yPosition, colorRepresentation, shapeName);
            case 'Rectangle':
                return this.#createRectangle(xPosition, yPosition, colorRepresentation, shapeName);
            default:
                throw new Error('Invalid shape name');
        }
    }

    #createCube(xPosition, yPosition, colorRepresentation, shapeName) {
        // Create a cube
        const cubeGeometry = new THREE.BoxGeometry();
        const cubeMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.name = shapeName;
    
        // Set the cube in the upper left corner
        cube.position.x = xPosition;
        cube.position.y = yPosition;
        cube.position.z = this.zPosition;
    
        return cube;
    }

    #createPyramid(xPosition, yPosition, colorRepresentation, shapeName) {
        // Create a pyramid
        const pyramidGeometry = new THREE.ConeGeometry(2, 4, 4);
        const pyramidMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const pyramid = new THREE.Mesh(pyramidGeometry, pyramidMaterial);
        pyramid.name = shapeName;
    
        // Set the pyramid in the upper right corner
        pyramid.position.x = xPosition;
        pyramid.position.y = yPosition;
        pyramid.position.z = this.zPosition;
    
        return pyramid;
    }

    #createSphere(xPosition, yPosition, colorRepresentation, shapeName) {
        // Create a sphere
        const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
        sphere.name = shapeName;
    
        // Set the sphere in the lower right corner
        sphere.position.x = xPosition;
        sphere.position.y = yPosition;
        sphere.position.z = this.zPosition;
    
        return sphere;
    }

    #createCylinder(xPosition, yPosition, colorRepresentation, shapeName) {
        // Create a cylinder
        const cylinderGeometry = new THREE.CylinderGeometry(2, 2, 4, 32);
        const cylinderMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const cylinder = new THREE.Mesh(cylinderGeometry, cylinderMaterial);
        cylinder.name = shapeName;
    
        // Set the cylinder in the lower left corner
        cylinder.position.x = xPosition;
        cylinder.position.y = yPosition;
        cylinder.position.z = this.zPosition;
    
        return cylinder;
    }

    #createCone(xPosition, yPosition, colorRepresentation, shapeName) {
        // Create a cone
        const coneGeometry = new THREE.ConeGeometry(2, 4, 32);
        const coneMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const cone = new THREE.Mesh(coneGeometry, coneMaterial);
        cone.name = shapeName;
    
        // Set the cone in the center
        cone.position.x = xPosition;
        cone.position.y = yPosition;
        cone.position.z = this.zPosition;
    
        return cone;
    }

    #createRectangle(xPosition, yPosition, colorRepresentation, shapeName) {
        // Create a rectangle
        const rectangleGeometry = new THREE.BoxGeometry(2, 4, 2);
        const rectangleMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        const rectangle = new THREE.Mesh(rectangleGeometry, rectangleMaterial);
        rectangle.name = shapeName;
    
        // Set the rectangle in the center
        rectangle.position.x = xPosition;
        rectangle.position.y = yPosition;
        rectangle.position.z = this.zPosition;
    
        return rectangle;
    }
}