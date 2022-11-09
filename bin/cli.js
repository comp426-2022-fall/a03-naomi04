#!/usr/bin/env node

import { roll } from '/lib/roll.js';
import minimist from 'minimist';
import { exit } from 'process';

//getting args & passing to roll function
const args = minimist(process.argv.slice(2))/
console.log(args);

const sides = 6;
if(args.sides) {
    sides = args.sides;
}

const dice = 2;
if(args.dice) {
    dice = args.dice;
}

const rolls = 1;
if(args.rolls){
    dice = args.rolls
}

console.log(JSON.stringify(roll(sides, dice, rolls)));

exit(0);