function areAnagrams(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) {
        return false;
    }

   //empty object
   //count = { l:1, i:1, s:1, t:1, e:1, n:1 }
    let count: Record<string, number> = {};

    // Count letters in str1
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        count[char] = (count[char] || 0) + 1;
    }

    // Subtract letters based on str2
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if (!count[char]) {
            return false; // either not found or count is already 0
        }
        count[char]--;
    }

    return true;
}

// Example usage:
console.log(areAnagrams("listen", "silent"));  // true
console.log(areAnagrams("hello", "world"));    // false
