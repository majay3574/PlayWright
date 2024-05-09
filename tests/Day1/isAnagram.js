/* /: Delimiters used to indicate the start and end of the regular expression.
[^a-zA-Z]: Square brackets [] define a character set.
 Inside the brackets, ^ at the beginning negates the character set,
 meaning it matches any character NOT specified within. 
 a-zA-Z specifies the range of characters to match, 
 which includes all lowercase and uppercase letters from 'a' to 'z' and 'A' to 'Z'.
/: Closing delimiter of the regular expression.
g: Modifier flag that stands for "global." 
This flag indicates that the regular expression should be applied globally, 
meaning it will match all occurrences in the input string rather than just the first occurrence. */
function isAnagram(str1, str2) {
    const cleanStr1 = str1.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z]/g, '').toLowerCase();
    return cleanStr1.split('').sort().join('') === cleanStr2.split('').sort().join('');
}

console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord(" fly me to the moon "));
console.log(isAnagram('listen', 'silent'));
console.log(isAnagram('hello', 'world'));
