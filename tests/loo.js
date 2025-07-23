/* console.log(fname_001);
let fname_001="ajay" */
/* require('./loo.js');  //--->js
import { fname_001 } from './loo.js';  // --->es6

fname_001()
function fname_001() {
    console.log("This is a function named fname_001");
}
 */
function fname_002(a, b) {
    return a + b
}
console.log(fname_002(10, 2));
console.log(fname_002(10, 4));
// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log(2 + 3);
})();

// Arrow function
const arrowFunction = (a, b) => a + b;
console.log(arrowFunction(5, 6));

