/* const findMissingNumberArrow = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
};
let myArray=[1,2,4,5]
console.log("missed number is : " + findMissingNumberArrow(myArray)); // 4 */

const findMissingNumbers = (arr) => {
    let missingNumbers = [];
    for (let i = 1; i <= arr.length + 1; i++) {
        if (!arr.includes(i)) {
            missingNumbers.push(i);
        }
    }
    return missingNumbers;
};

let myArray = [1, 2, 4, 5, 7];
console.log("missed numbers are : " + findMissingNumbers(myArray)); // [3, 6]


