const lines = require('fs').readFileSync('stdin', 'utf8').split('\n');
const [a, b] = lines.map(line => parseInt(line));
console.log(`SOMA = ${a + b}`);