const removeFalsyValues = (arr) => {
    var truthyArr = [];
    for (let value of arr) {

        if (value) {
            truthyArr.push(value)
        }
    }

    return truthyArr;
}

console.log(removeFalsyValues([0,1,2,"", NaN, false, undefined]))