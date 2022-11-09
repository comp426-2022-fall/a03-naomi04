#!/usr/bin/env node

import { roll } from "../lib/roll.js";
import minimist from "minimist";
import { exit } from "process";
//getting args & passing to roll function
const args = minimist(process.argv.slice(2));
//console.log(args);

var sides = 6;
if(args.sides) {
    sides = args.sides;
}

var dice = 2;
if(args.dice) {
    dice = args.dice;
}

var rolls = 1;
if(args.rolls){
    rolls = args.rolls
}

console.log(roll(sides, dice, rolls));

exit(0);