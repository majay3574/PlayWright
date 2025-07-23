
export function moveHere(a, b) { return a + b }
const add = (a, b) => { return a + b; }
add(10, 20)

//calling the function inside another function
let num = [1, 2, 3, 4, 5]
function square(n) { return n * n }
let sq = num.map((n) => { return square(n); });
console.log(sq);
