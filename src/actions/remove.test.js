const remove = require('./remove');
const store = require('../store');
const data = require('../fixtures');

test('remove test', () => {
  store.setState(data.default);
  let i = 0;
  let result = [...store.getState()];
  result.splice(i, 1);
  remove.default(i);
  expect(store.getState()).toEqual(result);
});