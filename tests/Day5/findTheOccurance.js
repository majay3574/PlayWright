/* Initialization:
count is initialized to 0 to keep track of the number of occurrences of k.
Loop through the array:
A for loop is used to iterate through the nums array. The loop runs from the first element (index 0) to the last element (index nums.length - 1).
Check for matches:
Inside the loop, each element in the array is compared with k.
If the current element (nums[i]) equals k, the count is incremented by 1.
Output the result:
After the loop finishes, count will hold the number of times k appears in nums.
The console.log(count) statement will print the result. */

// Given array
const nums = [2, 4, 5, 2, 1, 2];
// Given value to count
const k = 2;
// Initialize count to 0
let count = 0;
// Loop through the array nums
for (let i = 0; i < nums.length; i++) {
    // If the element equals k, increment count
    if (nums[i] === k) {
        count++;
    }
}
// Return the count of k in nums
console.log(count); // Output should be 3
