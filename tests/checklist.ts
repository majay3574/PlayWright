
//reverse
let fname = "Ajay Michael"
let rev = ""

for (let index = fname.length - 1; index >= 0; index--) {

    rev += fname[index]
}
console.log(rev);
//Occurance
let a = fname.toLowerCase()
let k = "a"
let count = 0
for (let index = 0; index < a.length; index++) {
    if (a[index] == k) {
        count++
    }

}
console.log(`Occurance of ${k} :`, count);
//factorial


function factorial(n: number) {
    if (n < 0) return undefined;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(10)); // Output: 120


let arr = ["a", "j", "a", "y"]
let k1 = "a";
let count1 = 0

for (let index = 0; index < arr.length; index++) {
    if (arr[index] === k1) {
        count1++
    }
}
console.log(count1);

//find duplicates
let num1 = [1, 1, 2, 3, 4, 5, 1, 2]
let dub: any = []

for (let i = 0; i < num1.length; i++) {
    for (let j = i + 1; j < num1.length; j++) {
        if (num1[i] === num1[j]) {
            dub.push(num1[i])
        }
    }
}
console.log(dub);

let n1 = [1, 2, 3, 4, 5, 6];
let n2 = [7, 4, 8, 9, 10, 1, 2];
let dub2: any = [];

for (let i = 0; i < n1.length; i++) {
    for (let j = 0; j < n2.length; j++) {
        if (n1[i] === n2[j]) {
            dub2.push(n1[i]);  // fixed typo here
            break; // optional: break inner loop once a match is found
        }
    }
}

/* let set2 = new Set(n2);
let dub2 = [...new Set(n1.filter(num => set2.has(num)))]; */
console.log(dub2);

//sort

let num = [11, 1, 23, 45, 2, 5, 10]
let sortedValue = num.sort((a, b) => a - b);
console.log(sortedValue);


let ne= new Set(n2)

let duplicate = [...new Set(n1.filter(num=>ne.has(num)))]