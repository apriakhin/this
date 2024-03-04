#!/usr/bin/env node

import calculator from '../index.js';

calculator.read();
console.log(`Sum is: ${calculator.sum()}`);
console.log(`Mul is: ${calculator.mul()}`);
