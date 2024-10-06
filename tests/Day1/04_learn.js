/* Use new Javascript File Name: 03_Loop.js

Objective: Understand looping - for and basic debugging
 
   Create function - print odd numbers(between 1 to 25) and execute in debug mode

Hint - Use mod operator(%)
 
   Call that function from the javascript

Time: 10 Minutes */
let msg = "The expected odd number is = "

function oddNumber(num) {
    for ( let i = 1; i <= num; i++) {
        if (i % 2 != 0) {
            console.log(`${msg}` + i)
        }

    }
}
oddNumber(100)


