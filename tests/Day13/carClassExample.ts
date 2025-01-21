 class Car {
    public color: string;
    public size: string;

    constructor(color: string, size: string) {
        this.color = color;
        this.size = size;
    }
}

const myCar = new Car('red', 'large'); 
console.log("The Color of the car is "+ myCar.color); 
console.log("The Size of the car is" + myCar.size); 
