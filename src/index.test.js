const { stringLength, reverseString } = require('./index');

test('String length of:', () => {
  expect(stringLength('Lucky')).toBe(5);
  expect(() => stringLength('')).toThrowError('Condition does not meet: Less than 1');
  expect(() => stringLength('Bhagyashree')).toThrow('Condition does not meet: Greater than 10');
});

test('Reverse of:', () => {
  expect(reverseString('Lucky')).toBe('ykcuL');
});