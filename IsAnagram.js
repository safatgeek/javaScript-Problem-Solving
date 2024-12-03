const isAnagram = (str1, str2) => {
    return str1.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('') == str2.toLowerCase().replace(/[^a-z]/g, '').split('').sort().join('')
}

console.log(isAnagram("Safat", "Tanjim"));
console.log(isAnagram("Listen1", "Silent"));
