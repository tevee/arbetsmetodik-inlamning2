function reverseString(string) {
    let length = string.length;
    let newString = "";
    for (letter in string) {
        newString += string[length - 1 - letter];
    }
    return string = newString;
}

console.log(reverseString("string"));

module.exports = reverseString;