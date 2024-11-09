const countVowels = (str) => {
    let vowels = "aeiou";
    let count = 0;

    for (let ch of str) {
        if (vowels.includes(ch)) count++
    }

    return count;
}

console.log(countVowels("I am Safat"))

