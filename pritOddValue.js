let a = "this is a pen";
let words = a.trim().split(" ");

for (let i = 0; i < words.length; i++) {
    if (i % 2 !== 0) { 
        words[i] = words[i].split("").reverse().join("");
    }
}
let finalString = words.join(" ");
console.log(finalString); 
