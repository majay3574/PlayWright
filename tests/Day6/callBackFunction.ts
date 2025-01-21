// The 'prepareCoffee' function takes a callback function as an argument.
//This callback represents the action to be taken once the coffee is ready.
// Simulate coffee preparation time with setTimeout
// 3 seconds delay
// The callback function that will be passed to 'prepareCoffee'.
// This function defines what to do once the coffee is ready.
// Call 'prepareCoffee' with the callback function 'onCoffeeReady'.
function prepareCoffee(callback: (Coffee: string) => void) {
    console.log("Coffee is being prepared...");
    setTimeout(() => {
        callback('Your coffee is ready!');
    }, 3000);
}
function onCoffeeReady(message: string) {
    console.log(message);
}
prepareCoffee(onCoffeeReady);

/* Function to prepare coffee
Simulating coffee preparation time
Calling the provided callback function with the message
Simulating 3 seconds of coffee preparation time
Callback function to handle when coffee is ready
Calling the function to prepare coffee and passing the callback function */