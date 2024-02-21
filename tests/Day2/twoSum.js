const nums = [2, 4, 7, 8, 11, 14];
const target = 18;

function twoSum(nums, target) {
    const len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] + nums[j] === target) {
                return [nums[i], nums[j]];
            }
        }
    }
    return []; // Return an empty array if no such pair is found
}

const result = twoSum(nums, target);
console.log(result); // Output: [4, 14]
