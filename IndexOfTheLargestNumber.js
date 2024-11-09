//Problem: Write a function that finds the index of the largest number in an array. 
//If the array is empty, return -1.

const indexOfLargestNUmber = (arrOfNum) => {
    if (arrOfNum.length == 0) return -1;
    return arrOfNum.indexOf(Math.max(...arrOfNum));
}

console.log(indexOfLargestNUmber([1, 3, 10, 9, 7]));