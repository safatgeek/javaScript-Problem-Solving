const secondLargestNumber = (numbers) => {
    return Math.max(...numbers.filter((num) => num !== (Math.max(...numbers))))
}

console.log(secondLargestNumber([2,3,5,6,8,7,9, 9,1]))