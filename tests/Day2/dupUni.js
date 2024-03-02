// let num = [1, 2, 3, 4, 3];
// let unique = [];

// for (let i = 0; i < num.length; i++) {
//     let j = 0;
//     for (j = 0; j < unique.length; j++) {
//         if (num[i] === unique[j]) {
//             break;
//         }
//     }
//     if (j === unique.length) {
//         unique.push(num[i]);
//     }
// }

// console.log(unique);





function duplicate (numbers){
    numbers.sort()
    let uniqueArray = [...new Set(numbers)];
    console.log(uniqueArray);
}
let nums = [1, 2, 3, 4, 3];
let numb = [3,4,5,4,3,2,1,6]
duplicate(nums)
duplicate(numb)