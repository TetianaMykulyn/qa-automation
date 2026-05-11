const number1 = 10;
const number2 = 5;

const str1 = 'test string1';
const str2 = '20';

const bool1 = true;
const bool2 = false;

const nullVar1 = null;
const undefinedVar1 = undefined;

console.log('-------- Arithmetic operations: same types variables');

const sumNumbers = number1 + number2;
console.log(sumNumbers);

const diffNumbers = number1 - number2;
console.log(diffNumbers);

const multiplicationNumbers = number1 * number2;
console.log(multiplicationNumbers);

const divNumbers = number1 / number2;
console.log(divNumbers);

const remainderNumbers = number1 % number2;
console.log(remainderNumbers);

const powerNumbers = number1 ** number2;
console.log(powerNumbers);

const concatStrings = str1 + ' ' + str2;
console.log(concatStrings);

const boolAnd = bool1 && bool2;
console.log(boolAnd);

const boolOr = bool1 || bool2;
console.log(boolOr);

console.log('-------- Arithmetic operations: different types variables');

const sumNumberString = number1 + str1;
console.log(sumNumberString);

const sumNumberBool = number1 + bool1;
console.log(sumNumberBool);

const sumNumberNull = number1 + nullVar1;
console.log(sumNumberNull);

const sumNumberUndefined = number1 + undefinedVar1;
console.log(sumNumberUndefined);

const sumStringBool = str1 + bool1;
console.log(sumStringBool);

const sumStringNull = str1 + nullVar1;
console.log(sumStringNull);

const sumStringUndefined = str1 + undefinedVar1;
console.log(sumStringUndefined);

const sumBoolNull = bool1 + nullVar1;
console.log(sumBoolNull);

const sumBoolUndefined = bool1 + undefinedVar1;
console.log(sumBoolUndefined);

const sumNullUndefined = nullVar1 + undefinedVar1;
console.log(sumNullUndefined);

const stringMinusNumber = str2 - number2;
console.log(stringMinusNumber);

const stringMultiply = str2 * number2;
console.log(stringMultiply);
