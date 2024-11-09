const greatestCommonDivisor = (num1, num2) => {
    let factors1 = [];
    let factors2 = [];
    let commonFactors = [];

    for (let i = 1; i <= num1; i++) {
        if (num1 % i == 0) {
            factors1.push(i)
        }
    }

    for (let j = 1; j <= num2; j++) {
        if (num2 % j == 0) {
            factors2.push(j)
        }
    }

    for (let item of factors1) {
        if(factors2.includes(item)){
            commonFactors.push(item)
        }
    }

    return Math.max(...commonFactors);

}

console.log(greatestCommonDivisor(15, 30));

// function gcd(a, b) {
//     if (!b) return a;
//     return gcd(b, a % b);
// }
