const convertFirstLetterToUpperCase = (sentence) => {
    let arrOfWords = sentence.split(" ")

    let arrWithUpperCase = [];

    for (word of arrOfWords) {
        arrWithUpperCase.push(word[0].toUpperCase() + word.slice(1))
    }

    return arrWithUpperCase.join(" ");
}

console.log(convertFirstLetterToUpperCase("I am Safat"))