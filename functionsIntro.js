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


let dog = {
	numLegs:4,
	aputate: function(legs) {
		this.numLegs = this.numLegs - legs;
	}
};

console.log(`This is your new puppy! He has ${dog.numLegs} legs`);
console.log("Unfortunately, he now has cancer. We may need to amputate both legs to be safe but we could try to save one.")

let legs = REALDINE.question("Would you like to try to save on leg or play it safe?(1 or 2): ")
dog.amputate(legs);
console.log(`He now has ${dog.numLegs} leg(s) and no cancer.`);
