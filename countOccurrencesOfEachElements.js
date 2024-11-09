/*Problem: Write a function that takes an array and returns an object  
showing the count of each unique element.*/

const countOccurrencesOfEachElements = (arr) => {
    const countObject = {};
    for (let i = 0; i < arr.length; i++) {
        if (countObject[arr[i]]) {
            countObject[arr[i]]++
        } else{
            countObject[arr[i]] = 1

        }
    }

    return countObject;
}

console.log(countOccurrencesOfEachElements(["Safat", "", "Rakin", "Priom", "Raghib", "Priom", "Priom"]))