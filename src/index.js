// Task 1:

// const stringLength = (string) => {
// return string.length;
// }

const stringLength = (string) => {
    let charCount = 0;
    for (let i = 0; i <= string.length; i++) {
        charCount = i;
    }
    try {
        if (charCount < 1) {
            throw 'Error';
        }
        if (charCount > 10) {
            throw 'Condition does not meet';
        }
    }
    finally {
    }
    return charCount;
}

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
    var newString = "";
    for (let i = string.length - 1; i >= 0; i--) {
    newString += string[i];
}
return newString;
}

console.log(reverseString('Lucky'));

module.exports = { stringLength, reverseString };