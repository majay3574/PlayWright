

/* How Hoisting Works
1. Variables:
Only the declarations are hoisted, not the initializations.
Variables declared with var are hoisted and initialized with undefined.
Variables declared with let and const are hoisted, but they remain in a "temporal dead zone" until the code execution reaches them.
2. Functions:
Function declarations are hoisted along with their implementation.
Function expressions (e.g., assigning a function to a variable) are not hoisted in the same way. */

console.log(myVar);  // undefined
var myVar = 5;
console.log(myVar);  // 5

greet();
//function a = greet; // Assign the function itself to `a`
function greet() {
  console.log("Hello!");
}

/* myFunc();  
var myFunc = function() {
  console.log("Hello!");
};

myFunc();  // "Hello, world!"

function myFunc() {
  console.log("Hello, world!");
}
 */