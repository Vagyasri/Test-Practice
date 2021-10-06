const sum = require('./sum');

test('adds 1 + 1 euals to 2', () => {
    expect(sum(1, 1)).toBe(2);
});