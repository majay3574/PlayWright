function moveZerosToEnd(arr) {
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
