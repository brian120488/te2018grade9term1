// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// Write your program below!
// First line should get user input (year) and store it in variable y.
let year = READLINE.question("Type the year for Easter:");

let y = year;

let a = Math.floor(y % 19);

let b = Math.floor(y / 100);
let c = Math.floor(y % 100);

let d = Math.floor(b / 4);
let e = Math.floor(b % 4);

let f = Math.floor((b + 8) / 25);

let g = Math.floor((b - f + 1) / 3);

let h = Math.floor((19 * a + b - d - g + 15) % 30);

let i = Math.floor(c / 4);
let k = Math.floor(c % 4);

let r = Math.floor((32 + 2 * e + 2 * i - h - k) % 7);

let m = Math.floor((a + 11 * h + 22 * r) / 451);

let n = Math.floor((h + r - 7 * m + 114) / 31);
let p = Math.floor((h + r - 7 * m + 114) % 31);

let day = p+1;

console.log(`y = ${y}`);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`c = ${c}`);
console.log(`d = ${d}`);
console.log(`e = ${e}`);
console.log(`f = ${f}`);
console.log(`g = ${g}`);
console.log(`h = ${h}`);
console.log(`i = ${i}`);
console.log(`k = ${k}`);
console.log(`r = ${r}`);
console.log(`m = ${m}`);
console.log(`n = ${n}`);
console.log(`p = ${p}`);

console.log(`In ${y}, Easter falls on ${n}/${day}.`);

