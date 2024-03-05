const findMissingNumberArrow = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return -1;
};

console.log("missed number is : " + findMissingNumberArrow(myArray)); // 4
console.log("missed number is : " + findMissingNumberArrow(myArrayone)); // -1
