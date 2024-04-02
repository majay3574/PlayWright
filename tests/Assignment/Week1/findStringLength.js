let sentenceOne = 'Hello World';
let trimSentence = sentenceOne.replace(" ", '');
console.log(trimSentence)
let splitWordsOne = trimSentence.split("");
console.log( splitWordsOne.length);

let sentenceTwo = ' fly me to the moon ';
let trimmedAndSpaceRemoved = sentenceTwo.replace(/ /g, ''); 
let splitWordsTwo = trimmedAndSpaceRemoved.split("");
console.log(splitWordsTwo.length);

