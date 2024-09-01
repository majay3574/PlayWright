abstract class Shape {
   name: string;
   constructor(name: string) {
      this.name = name;
   }
}

class Circle extends Shape {
   radius: number;
   constructor(name: string, radius: number) {
      super(name);
      this.radius = radius;
   }

}
//Cannot create an instance of an abstract class.
// This will throw an Error 
//const myShape = new Shape('My shape'); 

const shortCircle = new Circle("Short Circle", 0.5); // This will work fine.