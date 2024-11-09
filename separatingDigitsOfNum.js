const separatingDigitsOfNum = (num) => {
    let arrayOfDigits = [];

    while (num > 0) {
        arrayOfDigits.push(num % 10);
        num = Math.floor(num / 10);
    }

    return arrayOfDigits.reverse();
}

console.log(separatingDigitsOfNum(1023));