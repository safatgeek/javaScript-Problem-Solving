const convertNumberToBinary = (num) => {
    let keepLooping = true;
    let binary = [];
    while (keepLooping) {
        num % 2 == 0 ? binary.push(0) : binary.push(1)
        num = Math.floor(num / 2)
        if (num == 0) keepLooping = false;
    }

    return binary.reverse().join("")
}


console.log(convertNumberToBinary(4));
console.log(convertNumberToBinary(5));
console.log(convertNumberToBinary(3));
console.log(convertNumberToBinary(6));

// function toBinary(num) {
//     return num.toString(2);
// }
