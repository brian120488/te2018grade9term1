const READLINE = require("readline-sync");

function sayHello(name) {
	console.log(`Hello ${name}`);
}

sayHello("Mark");

function bother(name) {
	sayHello(name);
	sayHello(name);
	sayHello(name);
	sayHello(name);
	sayHello(name);
	sayHello(name);
	sayHello(name);
}

bother("Bob");
bother("Bobby");



function getAge() {
	let birthYear = READLINE.question("What is your birth year?: ");
	let currentYear = (new Date()).getFullYear();
	console.log(currentYear);
	let age = currentYear - birthYear;
	return age;
}

let userAge = getAge();
console.log(userAge);
if (userAge < 17) {
	console.log("No R -Rated moveis!");
}