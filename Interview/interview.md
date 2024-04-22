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

8.  What is the package.json. What will be inside package.json other than dependencies?
      the package.json file! It's like a little bunny's nest filled with essential information for a Node.js project. Besides dependencies, it holds metadata about the project, such as its name, version, description, author, and more. 

9.  What is the promise in JavaScript? What are the different promise statuses in JavaScript?
     In JavaScript, a promise is like a bunny's word that something will happen in the future. It can either succeed (fulfilled) or fail (rejected).

      Think of it like this:
        Pending: Bunny's waiting for something to happen.
        Fulfilled: Bunny happily gets its carrot.
        Rejected: Bunny sadly doesn't get its carrot.

    We use promises to handle asynchronous tasks neatly, making sure our code behaves gracefully whether things go right or wrong. 🐰🥕

10. What will cucumber.js file do?
     The cucumber.js file acts as a guidebook for running Cucumber tests in JavaScript projects. It sets up the locations of your test features, defines how your tests behave, and configures any additional functionalities needed during testing. Keeping it straightforward ensures smooth sailing through your testing journey! 🥒

11. What are the exceptions you have come across in javascript
     TypeError: When you use a variable or function incorrectly.
     ReferenceError: When you try to use something that doesn't exist.
     SyntaxError: When your code is written incorrectly.
     RangeError: When you try to manipulate something outside its limits.
     URIError: When you mess up with web addresses.

12. What is module in typescript?
    In TypeScript, a module is a way to organize code into separate files, each containing related functionality. Modules help keep code clean, maintainable, and reusable by encapsulating logic into distinct units.

    There are two main types of modules in TypeScript:

    Internal Modules (Namespaces): Before TypeScript 1.5, namespaces were used to organize code into logical groups. They act as containers for variables, functions, classes, and other objects. Namespaces are still supported in TypeScript, but they're generally considered outdated in favor of ES6 modules.
    External Modules (ES6 Modules): With the introduction of ES6, JavaScript gained native support for modules. TypeScript embraces ES6 modules, allowing you to define modules using import and export keywords. External modules provide better support for module dependency management, code isolation, and interoperability with other module systems.
    Using modules in TypeScript enables you to:

    Organize code into smaller, manageable pieces.
    Encapsulate functionality to prevent naming conflicts.
    Reuse code across different parts of your application or in other projects.
    Improve maintainability and readability by promoting a modular architecture.

Azure devops:
13.	How do you connect your automation code to Azure Devops?
    Connecting your automation code to Azure DevOps involves setting up a pipeline or a build/release definition in Azure DevOps that triggers the execution of your automation code whenever certain conditions are met, such as code changes or scheduled runs. Here's a general overview of the steps involved:

     Set up a Repository: First, ensure that your automation code is hosted in a version control system supported by Azure DevOps, such as Git. If your code is not already in a repository, create one and push your code to it.
      -->Create a Pipeline or Build/Release Definition: In Azure DevOps, navigate to the Pipelines (or Builds or Releases) section depending on whether you're setting up a CI/CD pipeline or a build/release definition. Then, create a new pipeline or definition.
      -->Choose a Repository: Select the repository where your automation code is hosted. Azure DevOps will monitor this repository for changes and trigger pipeline runs accordingly.
      --> Configure Trigger: Set up triggers to define when your pipeline should run. You can configure triggers based on code commits, pull requests, schedules, or manual triggers.
      -->Define Build Steps or Tasks: Define the steps or tasks that Azure DevOps should execute as part of your pipeline. These steps typically include tasks such as fetching the code, installing dependencies, running tests, and deploying the application.
      -->Integrate with Testing Frameworks: If your automation code includes tests, ensure that your pipeline is configured to run these tests. Integrate with your testing frameworks and specify the appropriate test commands or scripts to execute.
      -->Set up Environment Variables: Configure any environment variables or settings required by your automation code, such as API keys, environment URLs, or configuration files.
      -->Review and Save: Review your pipeline configuration to ensure everything is set up correctly. Save your changes once you're satisfied with the configuration.
      -->Run Pipeline: Trigger a manual run of your pipeline to verify that everything is working as expected. Monitor the pipeline execution and check for any errors or failures.
      -->Monitor and Iterate: Monitor the performance of your pipeline and automation code over time. Make any necessary adjustments or improvements based on feedback and performance metrics.
