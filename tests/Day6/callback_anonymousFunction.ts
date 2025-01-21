// Define an anonymous function
let myCallback = function() {
    console.log("Callback called");
}

// Pass the anonymous function as a callback
someFunction(myCallback);

// Function that takes a callback
function someFunction(callback: () => void) {
    // Call the callback
    callback();
}
