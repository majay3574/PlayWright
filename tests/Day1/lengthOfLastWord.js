
function lengthOfLastWord(s) {
 
    const words = s.split(" ");
   // [ 'Hello', 'World' ]
    const lastWord = words[words.length - 1];
    return lastWord.length;
}

let s= "Ajay Michael"
console.log(lengthOfLastWord(s) );