// import readline-sync module, don't touch!
const READLINE = require("readline-sync");
// fill in object below with all relevant properties (see instructions)	
let changeMachine = {
	inputCents:undefined,
	quarters:undefined,
	dimes:undefined,
	nickels:undefined,
	pennies:undefined,
	greeting:'Hello, give me all your money!',
	farewell:'Thank you for all your money!'
};

// write code below that simulates the change machine in action!
console.log(`${changeMachine.greeting}`);

changeMachine.inputCents = READLINE.question('How many cents would you like to insert?');

changeMachine.quarters = Math.floor(changeMachine.inputCents / 25);
let x = changeMachine.inputCents % 25;

changeMachine.dimes = Math.floor(x / 10);
let x1 = x % 10;

changeMachine.nickels = Math.floor(x1 / 5);

changeMachine.pennies = x1 % 5;

console.log(`
quarters = ${changeMachine.quarters}	
dimes = ${changeMachine.dimes}
nickels = ${changeMachine.nickels}
pennies = ${changeMachine.pennies}
${changeMachine.farewell}`
	);