/* IIFE: An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
Encapsulation: Using an IIFE is a common JavaScript pattern to create a new scope, thereby avoiding polluting the global scope with variables.
No Function Name Needed: Because the function is immediately invoked, it does not need a name. The function is executed right after it is created.
 */
//anonymous function 
(function () {
    let name = 'Mark';
    //name = 5;
    console.log(name);
})
    ();



