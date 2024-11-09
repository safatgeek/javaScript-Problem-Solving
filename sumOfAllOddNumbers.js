//Problem: Write a function that takes an array of numbers and returns the sum of all odd numbers.

const sumOfAllOddNumbers = (arr) => {
    let sumOfOdd = 0; 

    for (let num of arr) {
        if (num % 2 != 0) {
            sumOfOdd += num
        }
    }

    return sumOfOdd;
}

console.log(sumOfAllOddNumbers([1,2,3,4,5]));