const myArray = [1, 2, 3, 5, 6];
const myArrayone = [1, 2, 3, 4, 5];

const findmissingnumber = function(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== i + 1) {
            return i + 1;
        }
    }
    return -1;
};

console.log("missed number is :  " + findmissingnumber(myArray)); // 4
console.log("missed number is :  " + findmissingnumber(myArrayone)); // -1
