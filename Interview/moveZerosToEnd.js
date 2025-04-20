/* function moveZerosToEnd(arr) {
    let count = 0; 
 
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[count++] = arr[i];
        }
    }
    
       while (count < arr.length) {
        arr[count++] = 0;
    }
    
    return arr;
}

const arr = [3, 0, 4, 0, 6, 0, 5, 7];
console.log(moveZerosToEnd(arr));


 */

//moveZerosToEnd
let arr = [1, 2, 4, 0, 0, 5, 6, 7, 0]
let count = 0;
let unique = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
        count++
    } else {
        unique.push(arr[i])
    }
}
while (count >0) {
    unique.push(0);
    count --
}
console.log(unique);
