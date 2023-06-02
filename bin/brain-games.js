#!/usr/bin/env node

import greeatingUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greeatingUser();

console.log(`Hello, ${name}!`);
