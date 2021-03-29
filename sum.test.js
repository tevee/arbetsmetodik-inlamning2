const sum = require('./sum');

test('returns the sum of two values', () => {
    expect(sum(10, 5)).toBe(15);
})