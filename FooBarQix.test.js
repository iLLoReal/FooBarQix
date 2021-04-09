const FooBarQix = require(('./FooBarQix'));

test('Pass 1 to FooBarQix should return 1', () => {
  expect(FooBarQix(1)).toBe('1');
});