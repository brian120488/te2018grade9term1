const READLINE = require("readline-sync");

let healthPoints = 100;
let attackPoints = 50;
let hours = 3;

let str = "Wanna fight?!";
let str1 = "sUrE mAn, U rLy GuD";
let str2 = "but u have only 12 hours on this game noob";

let boolean = true;
let playerResponds2 = false;

let undefined;

console.log(healthPoints);
console.log(attackPoints);
console.log(str);
console.log(str1);
console.log(boolean);
console.log(str2);
console.log(playerResponds2);
console.log(hours);
console.log(undefined);

let userInput = READLINE.question("Type anything and I'll repeat it back!");
console.log(userInput);



