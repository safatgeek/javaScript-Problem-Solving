const findPrimes = (limit) => {

    const primeNumbers = [];

    for (let num = 2; num <= limit; num++) {

        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) primeNumbers.push(num);
    }

    return primeNumbers;
}

console.log(findPrimes(20))