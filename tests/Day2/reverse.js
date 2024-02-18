// let fname = "Jay";
// let reversedName = "";
/* 
for (let i = fname.length - 1; i >= 0; i--) {
    reversedName += fname[i];
}
console.log(reversedName); // Output: "yaJ"
 */
function reverse(fname) {
    let reversedName = "";
    for (let i = fname.length -1; i >=0; i--) {
        reversedName += fname[i];
    }
    console.log(fname[i]);
}

reverse("Ajay Michael"); // Output: "yaJ"


// let fnamed = fname.split('').reverse().join('');
// console.log(fnamed);


/* 
function reverse(fname) {
    let reversedName = "";
    for (let char of fname) {
        reversedName = char + reversedName;
    }
    console.log(reversedName);
}

reverse("Jay"); // Output: "yaJ" */
