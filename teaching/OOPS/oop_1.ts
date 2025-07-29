/* A class is a blueprint or template to create objects with common properties and methods. */

class Car {

    wheels() {
        console.log("rolling on the road");
    }

    headLight() {
        console.log("iam ready to blink");

    }

}
/*An object is an instance of a class. It contains real data and can use the methods defined in the class. */
let callingCar = new Car();
callingCar.wheels();
callingCar.headLight();


/* 
    | Concept    | Meaning                                                  |
    | ---------- | -------------------------------------------------------- |
    | **Class**  | Blueprint to define how an object should look and behave |
    | **Object** | A real instance created from a class                     | 
*/
/* 
    | Real World           | Programming                    |
    | -------------------- | ------------------------------ |
    | Blueprint of a house | `class House {}`               |
    | Actual built house   | `const myHouse = new House();` |
 */