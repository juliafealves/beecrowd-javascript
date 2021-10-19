const input = require('fs').readFileSync('stdin', 'utf8');
const lines = input.split('\n').map(n => parseInt(n));
const [a, b]  = lines;
console.log(`X = ${a + b}`);