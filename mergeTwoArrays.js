function mergeTwoArrays(arr1, arr2) {
    return [...new Set([...arr1, ...arr2])];
}

console.log(mergeTwoArrays([1, 2, 3, 5], [2, 3, 4, 6]));
