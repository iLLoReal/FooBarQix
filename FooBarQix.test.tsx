import FooBarQix from './FooBarQix';

test('Pass 1 to FooBarQix should return 1', () => {
  expect(FooBarQix('1')).toBe('1');
});

test('Pass 3 to FooBarQix should return \'FooFoo\' (divisible by 3, contains 3)', () => {
  expect(FooBarQix('3')).toBe('FooFoo')
});