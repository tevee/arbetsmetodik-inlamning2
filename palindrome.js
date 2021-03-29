function isPalindrome(string) {
    let length = string.length;
    let mid = Math.floor(length/2);
    for (let i = 0; i < mid; i++) {
        if (string[i] !== string[length - 1 - i]) {
            return string + " is not a palindrome.";
        }
    }
    return string + " is a palindrome.";
}

console.log(isPalindrome("racecar"));

module.exports = isPalindrome;

