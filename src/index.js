// Task 1:

// const stringLength = (string) => {
// return string.length;
// }

const stringLength = (string) => {
  let charCount = 0;
  for (let i = 0; i <= string.length; i += 1) {
    charCount = i;
  }
  try {
    if (charCount < 1) {
      throw new Error('Condition does not meet: Less than 1');
    }
    if (charCount > 10) {
      throw new Error('Condition does not meet: Greater than 10');
    }
  } finally {
    //   something
  }
  return charCount;
};

// console.log(stringLength('lucky'));

// Task 2:

// const reverseString = (string) => {
//     const splitString = string.split("");
//     const reverseArray = splitString.reverse();
//     const joinArray = reverseArray.join("");
//     return joinArray;
// }

// or
// const reverseString = (string) => {
//     return string.split("").reverse().join("");
// }

const reverseString = (string) => {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    newString += string[i];
  }
  return newString;
};

// console.log(reverseString('Lucky'));

// Task 3:

class Calculator {
    add = (a, b) => a + b;

    subtract = (a, b) => a - b;

    divide = (a, b) => a / b;

    multiply = (a, b) => a * b;
}

// eslint-disable-next-line no-unused-vars
const newCalculator = new Calculator();

// console.log(newCalculator.add(7, 9));

module.exports = { stringLength, reverseString, newCalculator };