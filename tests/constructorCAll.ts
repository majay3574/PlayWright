class Car {
    constructor() {
        const a = new Car(); // Recursive instantiation
    }
}

const carInstance = new Car(); // This line triggers the stack overflow
//error //Maximum call stack size exceeded