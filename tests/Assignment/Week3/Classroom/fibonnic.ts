function fibonacci(n: number): number[] {
    let series:any = [];
    let a = 0,
        b = 1, 
        temp:number;
 
    for (let i = 0; i < n; i++) {
        series.push(a);
        temp = a;
        a = b;
        b = temp + b;
    }
 
    return series;
}
const n = 5;
console.log(fibonacci(n))

/* function fibonacciWithExplicitSwap(n: number): number[] {
    const series: number[] = [];
    let a = 0;
    let b = 1;
 
    for (let i = 0; i < n; i++) {
        series.push(a);
        [a, b] = [b, a + b]; 
    }
 
    return series;
}

const n = 5;
console.log(fibonacciWithExplicitSwap(n)); */
