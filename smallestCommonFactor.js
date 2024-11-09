const smallestCommonFactor = (num1, num2) => {
    let factors1 = [];
    let factors2 = [];
    let commonFactors = [];

    for (let i = 2; i <= num1; i++) {
        if(num1 % i == 0) {
            factors1.push(i)
        }
    };

    for (let j = 2; j <= num2; j++) {
        if(num2 % j == 0) {
            factors2.push(j)
        }
    };

    for (let factor of factors1) {
        if (factors2.includes(factor)) {
            commonFactors.push(factor)
        }
    }

    if(commonFactors.length == 0) return 1;

    return Math.min(...commonFactors);

}

console.log(smallestCommonFactor(7,9))