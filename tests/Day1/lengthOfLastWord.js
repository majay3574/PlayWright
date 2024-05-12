

function lengthOfLastWord(fname) {
 
    const words = fname.split(" ");
   // [ 'Hello', 'World' ]
    const lastWord = words[words.length - 1];
    console.log(lastWord.length);
}
lengthOfLastWord("Ajay Michael")
//words=["Ajay","Michael"]  --> 2 -->0,1 1
lengthOfLastWord("He is a good")
lengthOfLastWord("bad boy")


// let man =["ranf","maja"]
// let nan = man.length
// console.log(nan);