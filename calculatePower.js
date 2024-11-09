// Problem: Write a function that takes two numbers, a base and an exponent, and returns the result 
// of raising the base to the power of the exponent (without using Math.pow())

const calculatePower = (num, exponent) => {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= num;
    }

    return result;
}

console.log(calculatePower(3, 3))