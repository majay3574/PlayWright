let num = [2, 5, 6, 7, 6, 4];
let sumEven = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
        sumEven += num[i];
    }
}

console.log(sumEven); // Output the sum of even numbers
