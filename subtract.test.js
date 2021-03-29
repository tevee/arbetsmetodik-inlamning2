const subtract = require('./subtract');

test('returns the subtraction of a, b', () => {
    expect(subtract(10, 5)).toBe(5)
});