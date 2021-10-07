const stringLength = require('./index');

test('String length of:', () => {
    expect(stringLength('Lucky')).toBe(5);
    expect(() => stringLength('')).toThrowError('Error');
    expect(() => stringLength('Bhagyashree')).toThrow('Condition does not meet');
});