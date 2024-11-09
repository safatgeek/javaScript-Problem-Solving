const findFrequenciesOfStr = (str) => {
    return [...str].reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1

        return acc;
    }, {})
} 

console.log(findFrequenciesOfStr("safat"));