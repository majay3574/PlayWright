// Function to compute the intersection of two arrays
function intersection(arr1, arr2) {
    const result = []; // To store the intersection without duplicates

    // Loop through each element of arr1
    for (const element of arr1) {
        // Check if the element is in arr2 and not already in the result array
        if (arr2.includes(element) && !result.includes(element)) {
            result.push(element);
        }
    }

    return result;
}


// Example calls to the intersection function
console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // Typical case: Output [3, 4]
console.log(intersection([1, 2, 3], [4, 5, 6]));      // No common elements: Output []
console.log(intersection([1, 2, 3], [1, 2, 3]));      // All elements common: Output [1, 2, 3]
console.log(intersection([], [1, 2, 3]));             // One array is empty: Output []
console.log(intersection([1, 1, 2, 3], [1, 3, 3, 4])); // Handling duplicates: Output [1, 3]

/* function intersection(arr1, arr2) {
    const result = []; // To store the intersection without duplicates

    // Loop through each element of arr1 using a traditional for loop
    for (let i = 0; i < arr1.length; i++) {
        const element = arr1[i];
        // Check if the element is in arr2 and not already in the result array
        if (arr2.includes(element) && !result.includes(element)) {
            result.push(element);
        }
    }

    return result;
} */


    function intersection(arr1, arr2) {
        const result = [];
    
        for (let i = 0; i < arr1.length; i++) {
            let isDuplicate = false;
    
            // Check if the element already exists in result
            for (let j = 0; j < result.length; j++) {
                if (arr1[i] === result[j]) {
                    isDuplicate = true;
                    break;
                }
            }
    
            // Check if the element is in arr2
            if (!isDuplicate) {
                for (let k = 0; k < arr2.length; k++) {
                    if (arr1[i] === arr2[k]) {
                        result.push(arr1[i]);
                        break;
                    }
                }
            }
        }
    
        return result;
    }
   console.log(
    intersection([1,2,3,4,5],[4,5,6,7,8]))


let browser = ["chrome", "safari", "chrome","safari","opera"];
let visible = [];
let duplicates = [];

for (let i = 0; i < browser.length; i++) {
    if (visible.indexOf(browser[i]) === -1) {
        visible.push(browser[i]);
    } else {
        if (duplicates.indexOf(browser[i]) === -1) {
            duplicates.push(browser[i]);
        }
    }
}
console.log(duplicates);  



let n = ["chrome", "safari", "chrome"];
let duplicate= [];

for (let i = 0; i < n.length; i++) {
    for (let j = i + 1; j < n.length; j++) {
        if (n[i] === n[j] && !duplicate.includes(n[i])) {
            duplicate.push(n[i]);
        }
    }
}

console.log(duplicate);  // Output: ["chrome"]

