//Remove Duplicate String
let duplicateString = "AjayMichael";
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

//Remove the duplicate Array
const strings: string[] = ['apple', 'banana', 'apple', 'orange', 'banana', 'grape'];

function findDuplicates(arr: string[]): string[] {
    const countMap: { [key: string]: number } = {};
    const duplicates: string[] = [];
    for (const str of arr) {
        countMap[str] = (countMap[str] || 0) + 1;
    }
    for (const key in countMap) {
        if (countMap[key] > 1) {
            duplicates.push(key); 
        }
    }
    return duplicates;
}
console.log(findDuplicates(strings)); 

//Reverse String  and Palindrome
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

//Find Duplicate number [Array]
let findDupNumber = [1, 2, 3, 4, 4, 6, 6, 4, 7, 7, 7, 8, 8]
let unique: number[] = []
for (let i = 0; i < findDupNumber.length; i++) {
    if (findDupNumber[i] == findDupNumber[i + 1] && !unique.includes(findDupNumber[i])) {
        unique.push(findDupNumber[i])
    }
}
console.log(unique);

//Duplicate string of array using SET
function removeDuplicates(str: string): string {
    return [...new Set(str)].join('');
}
console.log(removeDuplicates("Hi Ajay Michael"));

//find Duplicates in diferent array
let n1 = [1, 2, 3, 4, 5, 6,];
let n2 = [3, 4, 5, 6, 7, 8, 9]

let n3:number[] = []

for (let i = 0; i < n1.length; i++) {
  for (let j = 0; j < n2.length; j++) {
    if (n1[i] == n2[j]) {
      n3.push(n1[i])
      break;
    }
  }
}
console.log(n3);

//Armstrong Number

function isArmstrong(num: number): boolean {
    const numStr = num.toString();
    const numDigits = numStr.length;
    
    const sum = numStr
        .split('')
        .map(digit => Math.pow(Number(digit), numDigits))
        .reduce((acc, val) => acc + val, 0);
    
    return sum === num;
}

console.log(isArmstrong(153)); 

//Merge Array

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2];
console.log(mergedArray);

/* const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = arr1.concat(arr2);
console.log(mergedArray); // [1, 2, 3, 4, 5, 6] */



//Occurance Map 
function characterCountMap(str: string): Map<string, number> {
    const charMap = new Map<string, number>();

    for (const char of str) {
        charMap.set(char, (charMap.get(char) || 0) + 1);
    }

    return charMap;
}
const result = characterCountMap("hello world");
console.log(result);


function countNumberOccurrences(arr: number[], target: number): number {
    return arr.filter(num => num === target).length;
}
console.log(countNumberOccurrences([1, 2, 3, 4, 2, 2, 5], 2)); 
