1. Access modifiers in JavaScript
   JavaScript doesn't have access modifiers like Java or Python. However, it does have a few features that can be used to control the visibility of variables and functions.

Var keyword:
    Variables declared with the var keyword are function-scoped, which means they are accessible anywhere within the function in which they are declared.
Let keyword:
    Variables declared with the let keyword are block-scoped, which means they are accessible anywhere within the block in which they are declared.
Const keyword:
    Variables declared with the const keyword are also block-scoped, but their values cannot be changed once they are initialized.

2. Diff between DOM and BOM
    DOM stands for Document Object Model, and BOM stands for Browser Object Model. Both are used in JavaScript.

    DOM - DOM objects are related to the currently loaded page. The DOM has a tree structure called   DOMtree.
    BOM - BOM allows JavaScript to "talk to" the browser.The Browser Object Model (BOM) is a collection of objects exposed by the browser that allow JavaScript to interact with the browser window, document, and other browser-specific functionalities. 

3. Can you run JavaScript in windows? 
Yes, you can run JavaScript in Windows. There are a few ways to do this:
Use a web browser.
Most modern web browsers, 
    such as Google Chrome, Mozilla Firefox, and Microsoft Edge, have built-in JavaScript engines that allow you to run JavaScript code directly within the browser.
Use Node.js.
    Node.js is a JavaScript runtime environment that allows you to run JavaScript code outside of a web browser. You can use Node.js to build command-line tools, servers, and other types of applications.
Use a JavaScript IDE.
    A JavaScript IDE is an integrated development environment that provides a variety of features for developing JavaScript applications, such as code completion, syntax highlighting, and debugging. 

4.	Can you run typescript in windows?
     Yes, you can run TypeScript in Windows. To do this, you will need to install Node.js and TypeScript.
     Once you have installed Node.js and TypeScript, you can create a new TypeScript file by saving a file with a .ts extension. You can then write your code in the TypeScript file.

5.  Can you run typescript without compiling it to JavaScript? 
      yes, using  npx ts-node filename.ts

6.	What is Arrow function?
     Arrow functions are a concise syntax for defining functions in JavaScript. They were introduced in ES6 and offer a number of advantages over traditional function expressions, including:
       Shorter syntax: Arrow functions are typically shorter and more readable than traditional 
       function expressions. 
     For example, the following function expression:
          function add(a, b) {
            return a + b;
            }

     Can be written as an arrow function as follows:
        const add = (a, b) => a + b;

     Cannot be used as constructors:
       Arrow functions cannot be used as constructors. This is because arrow functions do not have their own prototype property.

7.	Difference between arrow and anonymous function
     Anonymous functions are functions without a name. You can define an anonymous function by omitting the name after the function keyword. 
     var myFunction = function() { 
         console.log("Hello World"); 
          }
     Arrow functions can be defined in a line, while anonymous functions require more than three lines for the execution of one statement. 
     var myFunction = () => { 
          console.log("Hello World"); 
          } 
