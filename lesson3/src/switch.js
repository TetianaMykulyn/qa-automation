const car = 'BMW';

switch (car) {
    case 'BMW':
        console.log('This is a BMW');
        break;
    case 'Audi':
        console.log('This is an Audi');
        break;
    case 'Mercedes':
        console.log('This is a Mercedes');
        break;
    default:
        console.log('Unknown car brand');
}

switch (car) {
    case 'BMW':
        console.log('This is a BMW');
        break;
    case 'Audi': {
        console.log('This is an Audi');
        break;
    }
    default:
        console.log('Unknown car brand');
}

const number = 5;

switch (number) {
    case '5':
        console.log('The number is 5');
        break;
    case 2:
        console.log('The number is 2');
        break;
    default:
        console.log('Unknown number');
}

