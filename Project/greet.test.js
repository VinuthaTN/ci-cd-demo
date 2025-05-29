const greet = require('./index');

test('greets the user', () => {
  expect(greet('Vinutha')).toBe('Hello, Vinutha!');
});
