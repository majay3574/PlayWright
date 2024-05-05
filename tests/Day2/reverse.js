let fname = "Jay";
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
    console.log(reversedName);
}

reverse("Ajay Michael"); // Output: "yaJ"


let fnamed = fname.split('').reverse().join('');
console.log(fnamed);


function rev(actualName){
    let name=""
    for(let i =actualName.length -1;i>=0;i--){
        if(i%2 == 1){
            name+=actualName[i]
        }
    }
    console.log(name);
}
rev("Ajay Michael")

/* 
function reverse(fname) {
    let reversedName = "";
    for (let char of fname) {
        reversedName = char + reversedName;
    }
    console.log(reversedName);
}

reverse("Jay"); // Output: "yaJ" */
