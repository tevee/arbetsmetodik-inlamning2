const isPalindrome = require('./palindrome');

test('checks whether string is a palindrome or not', () => {
    expect(isPalindrome("racecar")).toBe("racecar is a palindrome.");
});