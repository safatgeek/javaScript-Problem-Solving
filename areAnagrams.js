// Problem Description: Check if Two Strings are Anagrams

// Given two strings, write a function to check if they are anagrams of each other. Two strings are considered anagrams if:

// They use the same characters in the same frequency.
// The order of characters can be different.
// Spaces and capitalization should not affect the result.

const areAnagrams = (str1, str2) => {
    let formatedStr1 = str1.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
    let formatedStr2 = str2.toLowerCase().replace(/\s+/g, "").split("").sort().join("");

    return formatedStr1 === formatedStr2

}

console.log(areAnagrams("listen", "silent"));   // Output: true
console.log(areAnagrams("hello", "world"));     // Output: false
console.log(areAnagrams("Triangle", "Integral"));// Output: true
console.log(areAnagrams("Slot Machines", "Cash Lost in me"));// Output: true
