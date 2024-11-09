const secondLargestNum = (arr) => {
    const largestNumber = Math.max(...arr);
    const arrWithoutLargestNum = arr.filter((number) => number != largestNumber);

    return Math.max(...arrWithoutLargestNum);
    
}

console.log(secondLargestNum([3,1,6,8,9]))