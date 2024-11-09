const intersectionOfTwoArrays = (numbers1, numbers2) => {
    return [...new Set(numbers1.filter((number) => numbers2.includes(number)))]
}


console.log(intersectionOfTwoArrays([1,2,1, 3,4,5], [1,3,5,6, 1, 7,8]));