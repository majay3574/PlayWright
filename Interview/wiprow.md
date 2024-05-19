Wipro Interview:
****
1. Difference b/t Typescript and Javascript?
 
+---------------+                      +---------------------+
| TypeScript    |                      | JavaScript          |
+---------------+                      +---------------------+
| - Statically  |                      | - Dynamically       |
|   typed       |                      |   typed             |
| - Provides    |                      | - Weak tooling      |
|   strong      |                      |   and error         |
|   tooling     |                      |   checking          |
| - Supports    |                      | - Basic             |
|   object-     |                      |   object-oriented   |
|   oriented    |                      |   features          |
|   features    |                      | - Widely used in    |
| - Needs to be |                      |   web development   |
|   compiled    |                      | - Doesn't require   |
|   to          |                      |   compilation       |
|   JavaScript  |                      | - Large community   |
|               |                      |   and ecosystem     |
+---------------+                      +---------------------+

Static Typing:                                          Dynamically Typing:

typescript                                              JavaScript:

let myNumber: number = 10;                              let myNumber = 10;
let myString: string = "Hello, TypeScript!";            let myString = "Hello, JavaScript!";

------------------------------------------------------------------------------------------------------------------
Tooling and Error Checking:

TypeScript:
function greet(name: string) {
 // Error: Property 'toUpperCase' does not exist on type 'string'
    console.log("Hello, " + name.toUpperCase());
}
// Error: Argument of type 'number' is not assignable to parameter of type 'string'
greet(123); 

JavaScript:
function greet(name) {
    console.log("Hello, " + name.toUpperCase()); // No error at compile-time
}
greet(123); // No error at compile-time

------------------------------------------------------------------------------------------------------------------
Object-Oriented Programming:

TypeScript:
class Animal {
    constructor(public name: string) {}
    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}

let dog = new Dog("Buddy");
dog.move(10); // Output: Buddy moved 10 meters.
dog.bark();   // Output: Woof! Woof!

JavaScript:
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distance = 0) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}

let dog = new Dog("Buddy");
dog.move(10); // Output: Buddy moved 10 meters.
dog.bark();   // Output: Woof! Woof!


------------------------------------------------------------------------------------------------------------------
Compilation:
TypeScript code needs to be compiled into JavaScript before execution using the TypeScript compiler (tsc command).

------------------------------------------------------------------------------------------------------------------
Community and Adoption:
JavaScript has a larger community and ecosystem compared to TypeScript due to its longer existence and widespread usage.

2. {3,0,4,0,6,0,5,7} need to write code to convert this to {3,4,6,5,7,0,0,0}. Zero's at the last
3. If I have 500 tc's how can I optimise it to run within 4 hours? Note: Should not skip any tc's 
     -- Review and optimize your test scripts for efficiency. This includes identifying and eliminating redundant or unnecessary test steps, optimizing data setup and teardown processes, and improving the overall performance of test automation frameworks.
     --Optimize the test environment and configuration to reduce setup time and improve test execution speed. This might involve optimizing database queries, caching data, or configuring test environments to closely resemble production environments.
     --Prioritize test cases based on their criticality and impact. Run high-priority test cases first to quickly identify critical issues. This ensures that essential functionality is validated early in the testing process.
     --If your test suite and infrastructure support it, run multiple test cases in parallel. Divide the test cases into smaller batches and execute them concurrently to utilize available resources efficiently. Ensure that the tests in each batch do not have dependencies that could cause conflicts.
     --: Allocate sufficient resources, such as CPU, memory, and network bandwidth, to the testing environment to ensure optimal performance. Adjust resource allocation as needed based on the requirements of the test cases and the available infrastructure.

4. How to make sure 100% testing coverage from the requirement phase?
5. Parallel testing in Playwright?
     --Workers 
     In Jest --npx jest --concurrency=5
     Using npx playwright test directly supports parallel execution without needing Jest or Mocha. Playwright's built-in test runner is capable of running tests in parallel, which can be easily configured using the --workers option.
6. What are the files you are maintained in the utils package in your framework?
   utils/
  ├── apiClient.js
   API Utilities
     apiClient.js or apiClient.ts: Functions to handle API requests, responses, and common API operations.
  ├── config.js
   Configuration Utilities
     config.js or config.ts: Configuration settings and environment variables.
  ├── constants.js
  ├── dataUtils.js
  ├── domUtils.js
  ├── environment.js
  ├── helpers.js
     helpers.js or helpers.ts:
      Generic helper functions used across the test suite, such as data manipulation, random data generation, date formatting, etc.
  ├── logger.js
  ├── validationUtils.js

7. What is the test management tool you have used?
8. How to configure CI/CD in playwright?

iLink Interview:
******
1. What are all array methods used in your projects? (length, count, 
2. How to handle pipelines?
3. {3 6 7 8 2 4 1 5} output should be 10 = (3,7), (8,2)
4. Explain Framework structure
5. 1+'1', 1-'1', A-'1' - Output for this 
6. Agile questions, how sprint? percentage of manual and automation?
7. High severity low priority & high prioroty and low severity
8. In which situation for loop needs to use and which situation foreach?
9. Difference b/t setTimeout and setIntervals?
10. Difference b/t '==' and '==='?
11. How to handle flaky tests in playwright?

Capegemini:
***
1. Framework explanation
2. Difference b/t checked and unchecked exceptions?
3. Exceptions faced in playwright?
4. How to upload and download file in playwright?
5. Will you do unit testing?
6. pipeline related questions.
7. Asked to write API get and post request snippet
8. How to handle flakiness in playwright?
9. What are the GIT comments you have used?
10. How did you used Jenkins in your project?

Phreesia:
***
1. How to run 500 testcases in 10 mins using playwright? Is it possible?
npx playwright test --grep regression
2. How many workers we can use in playwright?
3. What is command used to run if some of the packages are missing in package.json?
npm install
4. Difference between npm and npx?
5. Remove duplicates from String using Javascript
7. What is interface in typescript?
8. What is module in typescript?
9. Difference between let, var and const.
 
Broadridge Interview:
*****
1. Advantages of Playwright over selenium?
2. How will you handle multiple tabs in playwright? (Asked to write code)
3. How will you handle date picker?
4. Asked to write code for login functionality in playwright?(positive and negative testcases)
5. How did you handled cross browser testing in playwright?
6. Framework explanation
7. How will you handle pipelines?
8. I have 500 testcases in selenium. need to migrate into playwright. How to migrate?