function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}
const str1 = "keep";
const str2 = "peek";

console.log(isAnagram(str1, str2));
if (isAnagram(str1, str2)) {
    console.log("Anagram");
} else {
    console.log("Not Anagram");
}
