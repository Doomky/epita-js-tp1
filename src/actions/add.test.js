const add = require('./add');
const store = require('../store');
const data = require('../fixtures');

test('add test', () => {
  store.setState(data.default);
  let test = "test";
  let result = [...store.getState(), test];
  add.default(test)
  expect(store.getState()).toEqual(result);
});