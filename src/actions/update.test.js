const update = require('./update');
const store = require('../store');
const data = require('../fixtures');

test('update test', () => {
  store.setState(data.default);
  let i = 0;
  let value = "test";
  let result = [...store.getState()];
  result[i] = value;
  update.default(i, value);
  expect(store.getState()).toEqual(result);
});