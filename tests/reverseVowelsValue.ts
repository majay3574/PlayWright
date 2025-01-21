let str = "My name is ajay";
let vowels = "aeiouAEIOU";
let vowelArray: string[] = [];

// Step 1: Extract vowels from the string
for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        vowelArray.push(str[i]);
    }
}


vowelArray.reverse();

// Step 3: Replace vowels in the string with the reversed vowels
let result = '';
let vowelIndex = 0;

for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        result += vowelArray[vowelIndex];
        vowelIndex++;
    } else {
        result += str[i];
    }
}

console.log(result); // This will log the string with vowels reversed
