/* Consider an array: arr[] = {1, 2, 3, 4, 5}

Initialize last element in variable ‘last_el’ that is 5
Then, iterate from n-1 to 1 and assign arr[i] = arr[i-1]
arr[4] = arr[3]
arr[ ] = {1, 2, 3, 4, 4}
arr[3] = arr[2]
arr[ ] = {1, 2, 3, 3, 4}
arr[2] = arr[1]
arr[ ] = {1, 2, 2, 3, 4}
arr[1] = arr[0]
arr[ ] = {1, 1, 2, 3, 4}
Assign arr[0] = last_el
arr[0] = 5
arr[ ] = {5, 1, 2, 3, 4}
Thus the required array will be {5, 1, 2, 3, 4} */

let arr = [1, 2, 3, 4, 5];
let last_el = arr[arr.length - 1];
console.log(last_el)
for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
}

arr[0] = last_el;

console.log(arr); // Output: [5, 1, 2, 3, 4]
