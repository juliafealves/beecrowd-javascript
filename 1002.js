const PI = 3.14159;
const input = require('fs').readFileSync('stdin', 'utf8');
const radius = input.split('\n').map(input => parseFloat(input)).shift();
const result = PI * (radius * radius);
console.log(`A=${result.toFixed(4)}`);