const isPrime = (num) => {
    if (num <= 1) return false;

    for (let n = 2; n < Math.sqrt(num); n++) {
        if (num % n == 0) {
            return false;
        }
    }
    return true;
};

console.log(isPrime(1));
console.log(isPrime(7));
console.log(isPrime(12));