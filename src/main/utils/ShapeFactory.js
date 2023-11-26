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
        return this.#createShapeMesh(cubeGeometry, cubeMaterial, xPosition, yPosition, shapeName);
    }

    #createPyramid(xPosition, yPosition, colorRepresentation, shapeName) {
        // Create a pyramid
        const pyramidGeometry = new THREE.ConeGeometry(2, 4, 4);
        const pyramidMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        return this.#createShapeMesh(pyramidGeometry, pyramidMaterial, xPosition, yPosition, shapeName);
    }

    #createSphere(xPosition, yPosition, colorRepresentation, shapeName) {
        // Create a sphere
        const sphereGeometry = new THREE.SphereGeometry(2, 32, 32);
        const sphereMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        return this.#createShapeMesh(sphereGeometry, sphereMaterial, xPosition, yPosition, shapeName);
    }

    #createCylinder(xPosition, yPosition, colorRepresentation, shapeName) {
        // Create a cylinder
        const cylinderGeometry = new THREE.CylinderGeometry(2, 2, 4, 32);
        const cylinderMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        return this.#createShapeMesh(cylinderGeometry, cylinderMaterial, xPosition, yPosition, shapeName);
    }

    #createCone(xPosition, yPosition, colorRepresentation, shapeName) {
        // Create a cone
        const coneGeometry = new THREE.ConeGeometry(2, 4, 32);
        const coneMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        return this.#createShapeMesh(coneGeometry, coneMaterial, xPosition, yPosition, shapeName);
    }

    #createRectangle(xPosition, yPosition, colorRepresentation, shapeName) {
        // Create a rectangle
        const rectangleGeometry = new THREE.BoxGeometry(2, 4, 2);
        const rectangleMaterial = new THREE.MeshBasicMaterial({ color: colorRepresentation});
        return this.#createShapeMesh(rectangleGeometry, rectangleMaterial, xPosition, yPosition, shapeName);
    }

    #createShapeMesh(geometry, material, xPosition, yPosition, shapeName){
        const shape = new THREE.Mesh(geometry, material);
        shape.name = shapeName;
        shape.position.x = xPosition;
        shape.position.y = yPosition;
        shape.position.z = this.zPosition;
        return shape;
    }
}