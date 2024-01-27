/* Use same Javascript File Name: 01_learn.js
 
    Objective: Learn var vs let vs const and understand variable scoping
 
    Declare a const name as browserVersion (global)
    Assign value as Chrome
    Create a function by name getBrowserVersion
    Create if condition inside function to check if browser is chrome, then
    Declare a local variable (browserVersion) and print that variable inside function (outside block)
    Call that function from the javascript
 
    - Use 'var' first as block variable and then convert that as 'let'
    - Confirm how it works
 
    Time: 10 Minutes */





function getBrowserVersion() {

    if (true) {
        var blockVariable = 'Block Variable ';
        console.log(blockVariable);
    }{
        let blockVariable = 'okay';
        console.log(blockVariable);
    }

}
const browserVersion = 'Chrome';

getBrowserVersion();
