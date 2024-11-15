const isUniqueElements = (arr) => {
    return arr.length == new Set(arr).size
}

console.log(isUniqueElements([1, 2, 3, 4, 4, 5,]));
console.log(isUniqueElements([1, 2, 3, 4, 5,]));