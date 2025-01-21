// Input arrays
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 6, 7, 8];
const result = [];

for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    for (let j = 0; j < arr2.length; j++) {
        if (element === arr2[j] && !result.includes(element)) {
            result.push(element);
        }
    }
}

// Output the result
console.log(result); // Expected output: [1, 2]
