/* it is a good practice to use the let keyword to declare variables whenever possible. 
This will help to avoid errors and make your code more readable and maintainable. */

/* The let keyword is used to declare variables with block scope.
This means that a variable declared with let can only be accessed 
within the block of code where it was declared. */
function greet() {
    let first = 'Welcome'
    console.log(first + 'Home')
}

console.log(first)
/* The var keyword is used to declare variables with function scope.
This means that a variable declared with var can be accessed anywhere within the function 
in which it was declared, but not outside of that function. */
function num() {
    var a = 'Good'
    console.log(a + 'Morning')
}
/* console.log(first+'Home')
console.log(a+'Morning') */
greet()
num()