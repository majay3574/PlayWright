/* let duplicateString = "AjayMichael";
let a = duplicateString.split("");

let uniquestring: any = [];
for (let i = 0; i < a.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < a.length; j++) {
        if (i !== j && a[i] === a[j]) {
            isDuplicate = true;
            break;
        }
    }
    if (!isDuplicate && !uniquestring.includes(a[i])) {
        uniquestring.push(a[i]);
    }
}
console.log(uniquestring.join("")); 
 */
const strings: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'grape'];

function findDuplicates(arr: string[]): string[] {
    // Step 1: create an empty object to store counts

    /*  { [key: string]: number }
 This is the TypeScript type annotation, which describes the shape of the object:
 
 { [key: string]: number } means:
 [key: string]:
 
 This means the object will have dynamic keys, where each key will be a string.
 Example keys: "apple", "banana", "orange"
 : number:
 
 Each key will map to a value of type number.
 This number will be the count (e.g., "apple": 2 means "apple" appeared 2 times). */

    const countMap: { [key: string]: number } = {};
    // Step 2: an empty array to store the duplicates
    const duplicates: string[] = [];
    // Step 3: loop over the array and count each item
    for (const str of arr) {
        countMap[str] = (countMap[str] || 0) + 1;
        // If str is not yet in countMap, it defaults to 0, then adds +1
    }

    // Step 4: loop over countMap to find items with count > 1
    for (const key in countMap) {
        if (countMap[key] > 1) {
            duplicates.push(key); // push into duplicates array
        }
    }
    // Step 5: return the duplicates
    return duplicates;
}


console.log(findDuplicates(strings)); // Output: ['apple', 'banana']


let countMap: { [key: string]: number } = {};
countMap["ajay"] = 1;
countMap["victor"] = 2;
console.log(countMap);


let fname = "Ajay";
let splittedName = fname.toLowerCase().split("");
let reversedArray: string[] = [];
for (let i = splittedName.length - 1; i >= 0; i--) {
    reversedArray.push(splittedName[i]);
}
console.log(reversedArray);
let reversed = reversedArray.join("");
if (reversed === fname.toLowerCase()) {
    console.log("This is a palindrome");
} else {
    console.log("This is not a palindrome");
}


let findDupNumber = [1, 2, 3, 4, 4, 6, 6, 4, 7, 7, 7, 8, 8]
let unique: number[] = []
let dupder: number[] = []

for (let i = 0; i < findDupNumber.length; i++) {
    if (findDupNumber[i] == findDupNumber[i + 1] && !unique.includes(findDupNumber[i])) {
        unique.push(findDupNumber[i])
    }
}
console.log(unique);
console.log(dupder);


function removeDuplicates(str: string): string {
    return [...new Set(str)].join('');
}

console.log(removeDuplicates("Hi Ajay Michael"));


