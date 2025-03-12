let num1 =[1,2,3,4,5,6]
let num2 =[4,5,6,7,8,9]

let union = Array.from(new Set([...num1, ...num2]));
console.log("Union:", union);

let difference1 = num1.filter(value => !num2.includes(value));
console.log("Difference (num1 - num2):", difference1);


