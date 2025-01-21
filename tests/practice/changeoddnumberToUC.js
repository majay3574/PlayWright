function convertOddToUpper() {
    let a = "apple";
    let result = "";

    for (let i = 0; i < a.length; i++) {
        if (i % 2 !== 0) {
            result += a[i].toUpperCase(); 
        } else {
            result += a[i]; 
        }
    }

    console.log(result);
}

