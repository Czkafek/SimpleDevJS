import {formatCurrency} from '../scripts/utils/money.js';

console.log('test suite: formatCurrency');

if (formatCurrency(2095) === '20.95') {
    console.log('test 1: passed');
}
else {
    console.log('test 1: failed');
}

if (formatCurrency(0) === '0.00') {
    console.log('test 2: passed');
}
else {
    console.log('test 2: failed');
}

if (formatCurrency(2000.5) === '20.01') {
    console.log('test 3: passed');
}
else {
    console.log('test 3: failed');
}

if (formatCurrency(2000.4) === '20.00') {
    console.log('test 4: passed');
}
else {
    console.log('test 4: failed');
}