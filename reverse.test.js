const reverseString = require('./reverse');

test('returns a reversed string', () => {
    expect(reverseString("string")).toBe('gnirts')
});