/* every() tests all elements against a condition.
It returns true if every element satisfies the test; otherwise false. */

const marks = [80, 85, 90, 88, 92];
// Check if all students scored above 75
const allPassed = marks.every(mark => mark > 75);
console.log("Did all students pass?", allPassed); // true
