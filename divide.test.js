const divide = require('./divide');

test('returns the value of a divided by b', () => {
    expect(divide(10, 5)).toBe(2)
});