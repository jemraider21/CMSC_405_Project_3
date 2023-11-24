import { Color } from "three";

class Colors {
    static Green = new Colors(0x00ff00);
    static Red = new Colors(0xff0000);

    constructor(colorRepresentation){
        this.colorRepresentation = colorRepresentation;
    }

    static createRandomColor(){
        const colors = [this.Green, this.Red];
        const randomNumber = Math.floor(Math.random() * 2) + 1;
        return colors[randomNumber - 1].getColorRepresentation();
    }

    getColorRepresentation(){
        return this.colorRepresentation;
    }
}

export { Colors };