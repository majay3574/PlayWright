/* In TypeScript, type is a keyword used to define a custom type or an alias for a type. 
It allows you to create complex types by combining existing types or by defining new structures. 
This is particularly useful for ensuring type safety and providing more readable code,
 especially when dealing with complex data structures. */

/* In TypeScript, an alias is a name given to a type or a combination of types. 
Using the type keyword, you can create a type alias to simplify complex type definitions and
make your code more readable and maintainable.

Here's an example to illustrate the concept of a type alias:

type Username = string; */

// Define the type for user registration
type UserRegistration = {
    name: string,
    age: number,
    email: string,
    isActive: boolean
};

// Initialize an array of user registrations
let userRegistrations: UserRegistration[] = [
    {
        name: "Shynoob",
        age: 26,
        email: "shynoob@gmail.com",
        isActive: true
    },
    {
        name: "John",
        age: 30,
        email: "john@example.com",
        isActive: false
    },
    // Add more objects as needed
];
/* Callback Function Execution:

The arrow function user => { ... } is the callback provided to forEach.
During each iteration, forEach calls this function with the current element of the array as the argument. */
/* userRegistrations.forEach(...) is a method that executes the provided function once for each element in the array.
user => { ... } is an arrow function that takes one parameter, user, representing the current element in the iteration.
Inside the arrow function, user refers to the current object from the userRegistrations array. */
userRegistrations.forEach(user => {
    console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}, Active: ${user.isActive}`);
});
let activeUsers = userRegistrations.filter(user => user.isActive);
console.log(activeUsers);

/* Iteration Breakdown
First Iteration:

The first object { name: "Shynoob", age: 26, email: "shynoob@gmail.com", isActive: true } is passed to the arrow function.
The user parameter now refers to this first object.
Inside the function, user.name is "Shynoob", user.age is 26, user.email is "shynoob@gmail.com", and user.isActive is true.
Second Iteration:

The second object { name: "John", age: 30, email: "john@example.com", isActive: false } is passed to the arrow function.
The user parameter now refers to this second object.
Inside the function, user.name is "John", user.age is 30, user.email is "john@example.com", and user.isActive is false.
Subsequent Iterations:

The same process repeats for the remaining objects in the array (Alice and Bob). */