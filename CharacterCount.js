const characterCount = (str, char) => {
    let count = 0;
    for (let ch of str) {
        if (ch == char) count++
    }

    return count;
}

console.log(characterCount("safat", 'a'));