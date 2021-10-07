const { stringLength, reverseString } = require('./index');

test('String length of:', () => {
    expect(stringLength('Lucky')).toBe(5);
    expect(() => stringLength('')).toThrowError('Error');
    expect(() => stringLength('Bhagyashree')).toThrow('Condition does not meet');
});

test('Reverse of:', () => {
    expect(reverseString('Lucky')).toBe('ykcuL');
});