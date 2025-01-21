//1. Function Declaration (Named Function)
//A function declaration defines a named function that can be called by its name.
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Mike"));

//2. Function Expression
//A function expression is when a function is assigned to a variable. The function is anonymous unless given a name.
const greet1 = function (name) {
    return `Hello, ${name}!`;
};
console.log(greet1("Mike"));

//3. Anonymous Function
//An anonymous function is a function without a name. It is often used as an argument or passed around as a value.
const greet2 = function (name) {
    return `Hello, ${name}!`;
};
console.log(greet2("Mike"));  // Output: Hello, Mike!
//4. Arrow Function
//An arrow function is a shorter syntax for writing functions. It doesn't have its own this, and it is often used for concise function expressions.
const greet3 = (name) => {
    return `Hello, ${name}!`;
};

console.log(greet3("Mike"));  // Output: Hello, Mike!


//5. Callback Function
//A callback function is passed as an argument to another function and is executed after the completion of that function.

function processUserInput(callback) {
    const name = prompt("Enter your name:");
    callback(name);
}

processUserInput(function (a) {
    console.log(`Hello, ${a}!`);
});


const sum = (a, b) => a + b;
const add = (a, b) => { return a + b; };
let fr = (a, b, c) => { console.log(a * b + c) }
fr(3, 5, 6)
