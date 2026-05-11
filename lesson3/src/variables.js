let a = 0;
console.log(a);

a = 1;
console.log(a);

let number = 5;
console.log(typeof number);

number = 5 / 'str';
console.log(number);
console.log(typeof number);

number = 'some string';
console.log(typeof number);

const str = 'some string' + ' ' + 'another string';
console.log(typeof str);
console.log(str);

const anotherString = `some string ${8} and ${9} ddwqdwq qweqwe ${a}`;
console.log(anotherString);
console.log(typeof anotherString);

const bool = true;
console.log(typeof bool);

const nullVar = null;
console.log(typeof nullVar);

const undefinedVar = undefined;
console.log(typeof undefinedVar);

const obj = {};
console.log(typeof obj);

const convertedBool = Boolean('false');
console.log(convertedBool);
console.log(typeof convertedBool);

const boolStr = 'true';

const anotherConvertedBool = boolStr === 'true';
console.log(anotherConvertedBool);
console.log(typeof anotherConvertedBool);

let sum = 5 + '10';
console.log(sum);
console.log(typeof sum);

sum = '10' + 5;
console.log(sum);
console.log(typeof sum);

sum = +'10' + 5;
console.log(sum);
console.log(typeof sum);
