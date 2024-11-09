const randomNumberWithinRange = (minNum, maxNum) => {
    return Math.floor(Math.random() * (maxNum - minNum - 1 )) + minNum + 1;
}

console.log(randomNumberWithinRange(3, 5));