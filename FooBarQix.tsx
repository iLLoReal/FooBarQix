const FooBarQix = (str: string): string => {
  type pairType = { number: number, result: string };
  type matrixType = pairType[];

  const pairMatrix: matrixType = [
    { number: 7, result: 'Qix' },
    { number: 5, result: 'Bar' },
    { number: 3, result: 'Foo' },
    { number: 0, result: '*' },
  ];
  const toInt: number = parseInt(str);

  pairMatrix.forEach((elem: pairType) => {
  	str = str.replace(new RegExp(`${elem.number}`, "g"), elem.result);
    str = (elem.number && !(toInt % elem.number)) ? elem.result + str : str;
  });
  if (str.match(/[a-z]/g)) {
    str = str.replace(/[0-9]/g, '');
  }
  return str;
};

export default FooBarQix;
