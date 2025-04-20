let num = [1, 2, 3, 2, 2, 3, 4, 5];

let k = 2;
count = 0;
for (let index = 0; index < num.length; index++) {
    if (num[index] == k) {
        count++;
    }
}
console.log(count);

let a = [1, 2, 3, 4, 5, 6], b = [3, 4, 5, 0, 6, 6, 7]
let c = a.concat(b)
//let c = a + "," + b;
console.log(c);


let ascen_num = [1, 23, 4, 5, 67, 8, 0]
ascen_num.sort((a, b) => a - b)
console.log(ascen_num);


let dub1 = [1, 2, 3, 4, 5, 6]
let dub2 = [3, 4, 5, 6, 7, 8]
let interset = []
for (let i = 0; i < dub1.length; i++) {
    for (let j = 0; j < dub1.length; j++) {
        if (dub1[i] == dub2[j]) {
            interset.push(dub1[i])
        }
    }
}
console.log(interset);

