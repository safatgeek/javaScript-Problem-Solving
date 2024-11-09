const commonElementsBetweenTwoArrays = (arr1, arr2) => {
    // const arrayOfCommonELements = [];

    // for (let i = 0; i < arr1.length; i++) {
    //     for (let j = 0; j < arr2.length; j++) {
    //         if (arr1[i] == arr2[j]) {
    //             if (arrayOfCommonELements.includes(arr1[i])) continue;
    //             arrayOfCommonELements.push(arr1[i])
    //         }
    //     }
    // }

    // return arrayOfCommonELements;


    let arrayOfCommonELements = [];
    for (let item of arr1) {
        if (arr2.includes(item) && !arrayOfCommonELements.includes(item)) {
            arrayOfCommonELements.push(item);
        }
    }
    return arrayOfCommonELements;

}

console.log(commonElementsBetweenTwoArrays([1, 1, 2, 3, 4, 2, 5], [1, 1, 2, 4, 6, 5, 5]));