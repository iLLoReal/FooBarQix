const FooBarQixJs = (str) => {
  str = str.toString();
  const pairMatrix = [
    { number: 7, result: 'Qix' },
    { number: 5, result: 'Bar' },
    { number: 3, result: 'Foo' },
    { number: 0, result: '*' },
  ];
  const toInt = parseInt(str);

  pairMatrix.forEach((elem) => {
  	str = str.replace(new RegExp(`${elem.number}`, "g"), elem.result);
    str = (elem.number && !(toInt % elem.number)) ? elem.result + str : str;
  });
  if (str.match(/[a-z]/g)) {
    str = str.replace(/[0-9]/g, '');
  }
  return str;
};
