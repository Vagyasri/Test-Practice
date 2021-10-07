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

console.log(stringLength('lucky'));

module.exports = stringLength;