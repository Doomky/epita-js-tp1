const list = require('./list');
const store = require('../store');
const data = require('../fixtures');

test('get test', () => {
    store.setState(data.default);
    let result = [...store.getState()];
    expect(list.default()).toEqual(result);
});