const stringLength = require('./index');

test('String length of Lucky:', () => {
    expect(stringLength('Lucky')).toBe(5);
});