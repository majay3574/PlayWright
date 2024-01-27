/* N = 5
A[] = {1,2,3,5}
Output: 4 */

// let B =N-1
// A.push(B)
// A.sort()
// console.log(A)

function findMissingNumber(arr) {
    // Calculate the expected sum of consecutive integers
    let n = arr.length + 1 ; 
    console.log(n)
    // One number is missing, so array length + 1
    let expectedSum = (n * (n + 1)) / 2;
    console.log(expectedSum)
    // Calculate the actual sum of the elements in the array
    let actualSum = 0;
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i];
        console.log(actualSum)
    }

    // The missing number is the difference between the expected and actual sum
    let missingNumber = expectedSum - actualSum;

    return missingNumber;
}

// Example usage:
let arr = [1, 2, 3, 5];
let missingNumber = findMissingNumber(arr);
console.log("Missing number:", missingNumber);
