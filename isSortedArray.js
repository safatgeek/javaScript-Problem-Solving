const isSortedArray = (arr) => {
    let lowerValue = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > lowerValue) {
            lowerValue = arr[i]
        }
        else return false;
    }

    return true;
}

console.log(isSortedArray([1, 2, 3, 4]));
console.log(isSortedArray([1, 2, 5, 4]));