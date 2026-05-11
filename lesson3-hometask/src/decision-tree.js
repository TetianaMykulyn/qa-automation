const num1 = 10;
const num2 = 5;
const str1 = '15';
const bool1 = true;
const undefinedVar1 = undefined;

if (num1 > num2) {
    console.log('num1 is greater than num2');
} else if (num1 < num2) {
    console.log('num1 is less than num2');
} else {
    console.log('num1 is equal to num2');
}

if (str1 > 0 && bool1) {
    console.log('str1 is greater than 0 and bool1 is true');
} else if (str1 > 0 || bool1) {
    console.log('str1 is greater than 0 or bool1 is true');
} else {
    console.log('str1 is not greater than 0 and bool1 is false');
}

if (undefinedVar1) {
    console.log('undefinedVar1 is truthy');
} else {
    console.log('undefinedVar1 is falsy');
}

