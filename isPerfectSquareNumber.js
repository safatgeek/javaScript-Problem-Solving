const isPerfectSquareNumber = (num) => {
    for (let i = 1; i <= Math.sqrt(num); i++) {
        if (Math.pow(i, 2) == num) {
            return true
        }
    }

    return false;
}

console.log(isPerfectSquareNumber(9));


// function isPerfectSquare(num) {
//     return Math.sqrt(num) % 1 === 0;
// }
