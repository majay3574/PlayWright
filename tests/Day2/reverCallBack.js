function reverseString(str, callback) {
    const reversed = str.split('').reverse().join('');
    callback(reversed);
}

reverseString("hello",
    function (result) {
        console.log("Reversed String:", result);
    });

   