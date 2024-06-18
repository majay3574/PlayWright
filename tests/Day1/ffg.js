


function varScoping() {
var x=1; //global scope
if(x==1){
var x=2;
console.log(x) // 2
}
console.log(x)// 2
}


varScoping()




function letScoping() {
let x=1; //function level scope
if(x==1){
let x=2; //block level scope
console.log(x) // 2
}
console.log(x)// 1
}


console.log("letScoping ")
letScoping()