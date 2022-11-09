
//Dont forget to make function exportable
//function that returns random dice roll given number of sides
export function roll(sides, dice, rolls) {
    const totals = [];
 for (let i = 0; i < rolls; i++) {
    const num =  Math.random(0, sides);
    totals.concat(num);
 }
 var obj = {
    sides: sides,
    dice: dice,
    rolls: rolls,
    results: totals
 }
 
  return obj;
}