const averageOfArElements = (arrOfNum) => {
    const sum = arrOfNum.reduce((acc, currentValue) => {
        return acc + currentValue;
    }, 0)

    return average = sum / arrOfNum.length;
}

console.log(averageOfArElements([1, 2, 3, 2, 5]))


const averageOfArrElements = (arrOfNum) => {
    let sum = 0;
    for (num of arrOfNum) {
        sum += num;
    }

    return average = sum / arrOfNum.length;
}

console.log(averageOfArrElements([1, 2, 3, 2, 5]))