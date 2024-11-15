const productOfArrElements = (arr) => {
    return arr.reduce((acc, item) => acc * item , 1)
}

console.log(productOfArrElements([1, 2, 3, 4]));