const get = require('./get');
const store = require('../store');
const data = require('../fixtures');

test('get test', () => {
    store.setState(data.default);
    let i = 0;
    let result = [...store.getState()][i];
    expect(get.default(i)).toEqual(result);
});