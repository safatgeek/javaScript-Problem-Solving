const frequencyOfElements = (arr) => {
    return arr.reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1

        return acc
    }, {})
}

console.log(frequencyOfElements([1,1,4,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4,5,5,5,5,5,5,5]))