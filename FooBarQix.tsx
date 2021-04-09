const FooBarQix = (str: string): string => {
  type pairType = {
      number: number,
      result: string,
    };
  type matrixType = pairType[];

  const toInt = parseInt(str);
  const pairMatrix: matrixType = [
    { number: 3, result: 'Foo' },
    { number: 5, result: 'Bar' },
    { number: 7, result: 'Qix' }
  ];
  let result = '';

  pairMatrix.forEach((elem: pairType) => {
    if (toInt - elem.number >= 0 && !((toInt - elem.number) % 10)) {
      result += elem.result;
    }
    if (!(toInt % elem.number)) {
      result += elem.result;
    }
  });
  return result === '' ? str : result;
};

export default FooBarQix;