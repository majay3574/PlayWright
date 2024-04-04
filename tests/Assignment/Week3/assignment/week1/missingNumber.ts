function missingNumber(nums: number[]): number {
    const n: number = nums.length;
    let totalSum: number = (n * (n + 1)) / 2;
    let actualSum: number = 0;

    for (let i = 0; i < n; i++) {
        actualSum += nums[i];
    }

    return totalSum - actualSum;
}


const arr: number[] = [3, 0, 1];
console.log("The missing number is:", missingNumber(arr)); 
