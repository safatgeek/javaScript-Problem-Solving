const checkSuffix = (str, suffix) => {
    return str.slice(-suffix.length) == suffix
}

console.log(checkSuffix("meditation", "tion"));
console.log(checkSuffix("meditation", "sion"));