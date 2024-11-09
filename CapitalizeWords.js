//Problem: Write a function that takes a string sentence and returns it with each word’s first letter capitalized.

const capitalizeWords = (sentence) => {
    const words = sentence.split(" ")

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join(" ");
} 

console.log(capitalizeWords("hello world!"));