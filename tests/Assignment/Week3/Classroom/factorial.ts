function factorial(n: number) {
    // Initialize result as 1 (factorial of 0 and 1 is 1)
    let result = 1;
    // Loop to compute the factorial by multiplying result by each number from 2 to n
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5));