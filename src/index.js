// const stringLength = (string) => {
// return string.length;
// }

const stringLength = (string) => {
    let charCount = 0;
    for (let i = 1; i <= string.length; i++) {
        charCount = i;
    }
    if (charCount > 10) {
        throw 'Condition does not meet';
    }
    return charCount;
}

module.exports = stringLength;