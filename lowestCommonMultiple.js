const lowestCommonMultiple = (num1, num2) => {
    const gcd = (a, b) => {
        if (!b) return a;
        return gcd(b, a % b);
    }

    return Math.abs(num1 * num2) / gcd(num1, num2);
}

console.log(lowestCommonMultiple(10,15))