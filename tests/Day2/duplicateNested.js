let num = [1, 2, 3, 4, 3];

console.log("Duplicate elements:");

for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
        if (num[i] === num[j]) {
            console.log(num[i]);
            break; // If duplicate found, no need to continue inner loop
        }
    }
}


let num2 = [1, 2, 3, 4, 3];
let duplicates = [];

for (let i = 0; i < num2.length - 1; i++) {
    for (let j = i + 1; j < num2.length; j++) {
        if (num2[i] === num2[j]) {
            duplicates.push(num2[i]);
        }
    }
}

console.log("Duplicate elements:", duplicates);

moveHere()