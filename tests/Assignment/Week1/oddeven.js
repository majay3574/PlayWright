let num = " "
function isOddOrEven(number) {
    if (number % 2 !== 0) {
        num += `${number}` + " "
        return ` ${number} is a odd Number`


    } else {
        return ` ${number} is a even Number`
    }
}

console.log(isOddOrEven(23));
console.log(num);
