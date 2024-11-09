const isSortedInDescending = (numbers) => {
    return numbers.every((value, index, arr) => !index || arr[index-1] >= value)
}

console.log(isSortedInDescending([1, 2, 3]));
console.log(isSortedInDescending([4, 3, 2, 2]));