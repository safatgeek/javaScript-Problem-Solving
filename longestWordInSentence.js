const longestWordInSentence = (sentence) => {
    let words = sentence.split(" ");
    let longestWord = ""
    for(let word of words) {
        if(word.length > longestWord.length) {
            longestWord = word
        }
    }

    return longestWord;
}

console.log(longestWordInSentence("My name is Safat Alaam"))