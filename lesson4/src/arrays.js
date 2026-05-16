const arr = ['1', 2, true, null, undefined, { name: 'Object1' }, [1, 2, 3], new Date('2024-01-01')];

console.log(arr);

for (const value of arr) {
    console.log(`value: ${value} and index ${arr.indexOf(value)}`);
}

const arr2 = arr;
arr2[0] = 'changed value';

console.log(arr);
console.log(arr2);

const filteredArr = arr.filter(value => value != null && typeof value !== 'object');
console.log(filteredArr);

const findArr = arr.find(value => value != null && typeof value !== 'object');
console.log(findArr);


arr.push(...[1, 2, 3, 4, 5]);
console.log(arr);

const sortedArr = arr.sort((a, b) => a - b);
console.log(sortedArr);

const sortedArr2 = arr.filter((value) => typeof value === 'number').sort((a, b) => a - b).reverse();
console.log(sortedArr2);

const multipliedArr = sortedArr2.map(value => value * 2);
console.log(sortedArr2);
console.log(multipliedArr);

multipliedArr.forEach(value => {
    if (value > 5) {
        console.log(`Value ${value} is greater than 5`);
    }
});

console.log(multipliedArr);

