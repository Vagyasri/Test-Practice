const {
  stringLength, reverseString, newCalculator, capitalize,
} = require('./index');

test('String length of:', () => {
  expect(stringLength('Lucky')).toBe(5);
  expect(() => stringLength('')).toThrowError('Condition does not meet: Less than 1');
  expect(() => stringLength('Bhagyashree')).toThrow('Condition does not meet: Greater than 10');
});

test('Reverse of:', () => {
  expect(reverseString('Lucky')).toBe('ykcuL');
});

describe('A simple calculator for operating on two parameters', () => {
  test('Adds 2 numbers', () => {
    expect(newCalculator.add(7, 9)).toEqual(16);
    expect(newCalculator.add(8, 5)).toEqual(13);
    expect(newCalculator.add(8, 7, 8)).toEqual(15);
  });
  test('Subtracts 2 numbers', () => {
    expect(newCalculator.subtract(9, 7)).toEqual(2);
    expect(newCalculator.subtract(8, 5)).toEqual(3);
    expect(newCalculator.subtract(8, 7, 8)).toEqual(1);
  });
  test('Divides 2 numbers', () => {
    expect(newCalculator.divide(9, 3)).toEqual(3);
    expect(newCalculator.divide(7, 3.5)).toEqual(2);
    expect(newCalculator.divide(5, 2)).toEqual(2.5);
  });
  test('Multiplies 2 numbers', () => {
    expect(newCalculator.multiply(7, 9)).toEqual(63);
    expect(newCalculator.multiply(15, 9)).toEqual(135);
    expect(newCalculator.multiply(14, 2)).toEqual(28);
  });
});

test('Capitalize a text', () => {
  expect(capitalize('lucky')).toBe('Lucky');
});
