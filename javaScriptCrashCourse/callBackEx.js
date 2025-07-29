/* const number = [1, 2, 3, 4, 5, 6]

const double = number.map(function (num) {
    return num * 2
}
)

console.log(double);
 */

function addition(a, b, callback) {
    return callback(a, b)
}

function add(x,y) {
    return x + y
}

const  solution = addition(1,2,add);
console.log(solution);
