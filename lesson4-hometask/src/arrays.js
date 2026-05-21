const numberArr = [1, 2, 70, 3, 4, 5, 10, 13, 34, 55, 21];

numberArr.forEach ((value) => {
    console.log(`array value: ${value}`);
});

const numberArrInOneLine = numberArr.reduce((previousValue, currentValue) => {
    return `${previousValue} ${currentValue}`;
});
console.log(`array values in one line: ${numberArrInOneLine}`);

const sumOfNumberArr = numberArr.reduce((total, currentValue) => {
    return total + currentValue;
});
console.log(`sum of array values: ${sumOfNumberArr}`);

const sortedNumberArr = numberArr.sort((a, b) => a - b);
console.log(`sorted array values in ascending order: ${sortedNumberArr}`);

const filteredNumberArr = numberArr.filter((value) => value < 10);
console.log(`filtered array values: ${filteredNumberArr}`);

const findNumberInArr = numberArr.find((value) => value > 30);
console.log(`found number in array: ${findNumberInArr}`);

for (const value of numberArr) {
    console.log(`value: ${value} and index ${numberArr.indexOf(value)}`);
}

const groupedByEvenOdd = Object.groupBy(numberArr, (value) => value % 2 === 0 ? 'even' : 'odd');
console.log('grouped by even and odd:', groupedByEvenOdd);

const poweredNumberArr = numberArr.map((value) => value ** 2);
console.log(`array values powered to 2: ${poweredNumberArr}`);

const stringArr = ['a', 'b', 'c', 'd', 'e'];

const concatArr = numberArr.concat(stringArr);
console.log(`concatenated array: ${concatArr}`);

const mixedArr = [1, 'test string', true, 2, 'another string', false];

const filteredMixedArr = mixedArr.filter((value) => typeof value === 'number');
console.log(`filtered mixed array (only numbers): ${filteredMixedArr}`);

const boolArr = [true, false, true, false, true];

const concatAllArr = numberArr.concat(stringArr, boolArr, mixedArr);
console.log(`concatenated all arrays: ${concatAllArr}`);

console.log('-------------------------------------------------------------------------------');

concatAllArr.forEach((value) => {
    console.log(`value: ${value} and type: ${typeof value}`);
});

const groupedByType = Object.groupBy(concatAllArr, (value) => typeof value);
console.log('grouped by type:', groupedByType);

