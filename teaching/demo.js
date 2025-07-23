
//ES06
//var global scope ,reassign , redeclare 
var fname = "x";
var fname = "y";
console.log(fname);
//global scope
{
    var b = "malFire"
}
console.log(b);

//standard 
//let and const is blocked scoped
//100 var memory ="chat" var memory ="chatmemory"
let lname = "ajay";
lname = "michael";
console.log(lname)

//cant reassign and redeclare
const sname = "a";
console.log(sname);
//blockscope
let a;
{
    a = "bala";
}
console.log(a);

//String
//String str = "ajay"
let str = "a,j,a,y"
let nub = "   ajay   "
let dummyValue = 1000
let bool = true
let nu = null
let un = undefined

console.log(typeof str);
console.log(typeof dummyValue);
console.log(typeof bool);
console.log(typeof nu);
console.log(typeof un);
console.log(str.includes("a"));
console.log(str.indexOf("y"));
let str1 = str.split(","); console.log(str1); console.log(str1.join(""));
console.log(nub.trim());
console.log(nub.toUpperCase());









