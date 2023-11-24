export class Colors {
    static Green = new Colors("Green", 0x00ff00);
    static Red = new Colors("Red", 0xff0000);
    static Blue = new Colors("Blue", 0x0000ff);
    static Yellow = new Colors("Yellow", 0xffff00);
    static White = new Colors("White", 0xffffff);
    static Purple = new Colors("Purple", 0x800080);
    static Orange = new Colors("Orange", 0xffa500);
    static Pink = new Colors("Pink", 0xffc0cb);
    static Brown = new Colors("Brown", 0x964b00);

    constructor(colorName, colorRepresentation){
        this.colorName = colorName;
        this.colorRepresentation = colorRepresentation;
    }

    static createRandomColor(){
        const colors = [this.Green, this.Red, this.Blue, this.Yellow, this.White, this.Purple, this.Orange, this.Pink, this.Brown]
        const randomNumber = Math.floor(Math.random() * colors.length) + 1;
        const randomColor = colors[randomNumber - 1];
        return randomColor;
    }

    getName(){
        return this.colorName;
    }

    getColorRepresentation(){
        return this.colorRepresentation;
    }
}