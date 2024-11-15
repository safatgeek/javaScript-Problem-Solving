const isAllElementsEqual = (arr) => {
    return arr.every(item => item === arr[0])
}

console.log(isAllElementsEqual([1,1,,1,1,1]));
console.log(isAllElementsEqual([1,1,2,1,1,1]));