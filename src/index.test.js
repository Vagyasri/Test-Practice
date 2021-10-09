const { stringLength, reverseString, newCalculator } = require('./index');

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
    expect(newCalculator.add(7, 9)).toEqual(16);
    expect(newCalculator.add(7, 9)).toEqual(16);
  });
  test('Adds 2 numbers', () => {
    expect(newCalculator.subtract(9, 7)).toEqual(2);
    expect(newCalculator.subtract(9, 7)).toEqual(2);
    expect(newCalculator.subtract(9, 7)).toEqual(2);
  });
  test('Adds 2 numbers', () => {
    expect(newCalculator.divide(9, 3)).toEqual(3);
    expect(newCalculator.divide(9, 3)).toEqual(3);
    expect(newCalculator.divide(9, 3)).toEqual(3);
  });
  test('Adds 2 numbers', () => {
    expect(newCalculator.multiply(7, 9)).toEqual(63);
    expect(newCalculator.multiply(7, 9)).toEqual(63);
    expect(newCalculator.multiply(7, 9)).toEqual(63);
  });
});