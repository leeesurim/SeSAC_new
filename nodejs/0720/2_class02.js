class Car {
    constructor(color){
        this.isWheel = true;
        this.isDoor = true;
        this.color = color;
    }
    go(){
        console.log("전진");
    }
    back(){
        console.log("후진");
    }
    returnColor(){
        return this.color;
    }
}

module.exports = { Car };