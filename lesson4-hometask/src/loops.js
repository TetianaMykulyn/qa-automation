console.log('--------for loop: 0 - 9 ---------');
for ( let i = 0; i < 10; i++) {
    console.log(`value of current i: ${i}`);
}

console.log('--------while loop: 0 - 9 ---------');
let j = 0;
while (j < 10) {
    console.log(`value of current j: ${j}`);
    j++;
}

console.log('--------do..while loop: 0 - 9 ---------');
let k = 0;
do {
    console.log(`value of current k: ${k}`);
    k++;
} while (k < 10);

console.log('--------for loop: 100 - 0 ---------');
for ( let i = 100; i >= 0; i -= 10) {
    console.log(`value of current i: ${i})`);
}

console.log('--------while loop: 100 - 0 ---------');
let m = 100;
while (m >= 0) {
    console.log(`value of current m: ${m}`);
    m -= 10;
}

console.log('--------do..while loop: 100 - 0 ---------');
let n = 100;
do {
    console.log(`value of current n: ${n}`);
    n -= 10;
} while (n >= 0);

