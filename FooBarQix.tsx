const FooBarQix = (str: string): string => {
  type pairType = { number: number, result: string };
  type matrixType = pairType[];

  const pairMatrix: matrixType = [
    { number: 7, result: 'Qix' },
    { number: 5, result: 'Bar' },
    { number: 3, result: 'Foo' },
  ];
  const toInt = parseInt(str);

  pairMatrix.forEach((elem: pairType) => {
  	str = str.replace(new RegExp(`${elem.number}`, "g"), elem.result);
    str = (!(toInt % elem.number)) ? elem.result + str : str;
  });
  str = str.replace(/[0-9]/g, '');
  return str.length ? str : toInt.toString();
};

export default FooBarQix;
