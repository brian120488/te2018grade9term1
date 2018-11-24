let READLINE = require('readline-sync');

/*                               *********** Practice Problems ***********                             */

/*            Problem 1           */
/*  You're going out for dinner and you need a script that will calculate the tip for you!
    Ask the user for a subtotal, calculate the tip (15%) and total, and print it out prettily!
    Finish that?
    1. Ask the user if the user if they're feeling generous, cheap, or normal.
       Update the tip amount (generous - 20%, cheap - 5%, normal - 15%) based on their response.
    2. Round all the dollar amounts to two decimal places (google it!!!)
*/

// YOUR CODE GOES BELOW HERE
let subtotal = READLINE.question("What is the subtotal?");
let mood = READLINE.question("Pick your mood today! (generous, cheap, normal)");
let tipPercent;

if(mood == "generous") {
  tipPercent = 0.2;
}
else if(mood == "cheap") {
  tipPercent = 0.05;
}
else if(mood == "normal") {
  tipPercent = 0.15;
}

subtotal = parseFloat(subtotal);
let tip = Math.round(100 * subtotal * tipPercent)/100;
let total = subtotal + tip; 



console.log(`Subtotal: $${subtotal}`);
console.log(`Tip: $${tip}`);
console.log(`You have to pay $${total}.`);

// AND ABOVE HERE






/*            Problem 2           */
/*  Create an object that is a madlib creator. The object at least these properties:
      - One noun
      - One verb
      - One adjective
      - Three more categories of your choice
  1. Initialize the Object
  2. Get user input for each of the properties
  3. Create a madlib property on your object and use the properties to fill it out
  4. Print the madlib to the console
*/

// YOUR CODE GOES BELOW HERE
let madlib = {
  noun:undefined,
  verb:undefined,
  adjective:undefined,
  names:undefined,
  game:undefined,
  when:undefined,
};
 madlib.names = READLINE.question("Random Name: ");
 madlib.game = READLINE.question("Random Game: ");
 madlib.when = READLINE.question(`How often ${madlib.names} plays ${madlib.game} (ex: everyday, 23 hours every Saturday): `);
 madlib.verb = READLINE.question(`What do you do in ${madlib.game}(ex: fighting, racing): `);
 madlib.noun = READLINE.question(`What or who would ${madlib.names} be ${madlib.verb}: `);
 madlib.adjective = READLINE.question(`How would you describe ${madlib.noun}: `);
 
 console.log(`${madlib.names} plays ${madlib.game} ${madlib.when} while ${madlib.verb} ${madlib.adjective} ${madlib.noun}.`);



// AND ABOVE HERE