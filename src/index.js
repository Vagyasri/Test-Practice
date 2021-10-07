// const stringLength = (string) => {
// return string.length;
// }

const stringLength = (string) => {
    let charCount = 0;
    for (let i = 0; i <= string.length; i++) {
        charCount = i;
    }
    return charCount;
}

module.exports = stringLength;