import FooBarQix from './FooBarQix';

test('Pass 1 to FooBarQix should return 1', () => {
  expect(FooBarQix('1')).toBe('1');
});

test('Pass 3 to FooBarQix should return \'FooFoo\' (divisible by 3, contains 3', () => {
  expect(FooBarQix('3')).toBe('FooFoo')
});

test('Pass 4  to FooBarQix should return  4', () => {
  expect(FooBarQix('4')).toBe('4')
});

test('Pass 5  to FooBarQix should return  BarBar (divisible by 5, contains 5', () => {
  expect(FooBarQix('5')).toBe('BarBar')
});

test('Pass 6  to FooBarQix should return  Foo (divisible by 3', () => {
  expect(FooBarQix('6')).toBe('Foo')
});

test('Pass 7  to FooBarQix should return  QixQix (divisible by 7, contains 7', () => {
  expect(FooBarQix('7')).toBe('QixQix')
});

test('Pass 8  to FooBarQix should return  8', () => {
  expect(FooBarQix('8')).toBe('8')
});

test('Pass 9  to FooBarQix should return  Foo', () => {
  expect(FooBarQix('9')).toBe('Foo')
});

test('Pass 10 to FooBarQix should return  Bar', () => {
  expect(FooBarQix('10')).toBe('Bar')
});

test('Pass 13 to FooBarQix should return  Foo', () => {
  expect(FooBarQix('13')).toBe('Foo')
});

test('Pass 15 to FooBarQix should return  FooBarBar (divisible by 3, divisible by 5, contains 5', () => {
  expect(FooBarQix('15')).toBe('FooBarBar')
});

test('Pass 21 to FooBarQix should return  FooQix', () => {
  expect(FooBarQix('21')).toBe('FooQix')
});

test('Pass 33 to FooBarQix should return  FooFooFoo (divisible by 3, contains two 3', () => {
  expect(FooBarQix('33')).toBe('FooFooFoo')
});

test('Pass 51 to FooBarQix should return  FooBar', () => {
  expect(FooBarQix('51')).toBe('FooBar')
});

test('Pass 53 to FooBarQix should return  BarFoo', () => {
  expect(FooBarQix('53')).toBe('BarFoo')
});
