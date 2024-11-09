//Problem: Write a function that takes a sentence as input and returns the longest word in that sentence.

const longestWord = (sentence) => {
    const words = sentence.split(" ");
    let longestWord = "";

    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(longestWord("I am Safat"));