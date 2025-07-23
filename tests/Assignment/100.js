//Print numbers from 1 to 100, then reverse the sequence using a single for loop and explain the same
let num = [];
for (let index = 1; index <= 100; index++) {
    num.push(index);
}
let num2 =[...num].reverse();
console.log(num+","+num2)
// Output: 1,2,3,...,100,100,99,98,...,1    