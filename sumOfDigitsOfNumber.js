const sumOfDigitsOfNumber = (num) => {
    // let stringOfNumber = num.toString();
    // let sumOfDigits = 0;

    // for (let digit of stringOfNumber) {
    //     sumOfDigits += parseInt(digit)
    // }

    // return sumOfDigits;

    let sum = 0;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10)
    }

    return sum;
}

console.log(sumOfDigitsOfNumber(1025));