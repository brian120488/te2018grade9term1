const READLINE = require("readline-sync");

let eat;
let hw;
let exercise;
let shower;

eat = READLINE.question("Did you eat when you got home?");
if(eat == "yes") {
	console.log("Good!");
}
else {
	console.log("Go get something to eat.");
}



hw = READLINE.question("Do you have any homework?");
if(hw == "yes") {
	console.log("Go do it.");
}
else {
	console.log("Go grab some books to read.");
}



exercise = READLINE.question("Did you exercise?");
if(exercise == "yes") {
	console.log("Great!");
}
else{
	console.log("Go exercise then!");
}



shower = READLINE.question("Did you shower?");
if(shower == "yes") {
	console.log("Great, make sure to brush your teeth!");
}
else {
	console.log("Do it right away and make sure to get to bed before 10:30!");
}