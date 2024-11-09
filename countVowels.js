const countVowels = (str) => {
    let count = 0;
    const vowels = "aeiou"
    let lowerCaseStr = str.toLowerCase(); 

    for (let ch of lowerCaseStr) {
        if (vowels.includes(ch)) count++
    }

    return count;
}

console.log(countVowels("saeefat"));