// Author: FirstName LastName
const READLINE = require("readline-sync");

// global variables
let firstName;
let lastName;
let momMaidenName;
let cityBorn;
let dreamCar;
let street;
let fantasyName;

/******************************************************************************
                                  getNewFirstName()

  This function returns the user's new first name. To do so, concatenate the
  first 3 letters of their real first name and the first 2 letters of their
  real last name.
*******************************************************************************/

function getNewFirstName() {
  firstName = READLINE.question("What is your first name?: ");
  lastName = READLINE.question("What is your last name?: ");
  let newFirstName = firstName.substring(0, 3) + lastName.substring(0, 2);
  return newFirstName;
}

/******************************************************************************
                                  getNewLastName()

  This function returns the user's new last name. To do so, concatenate the
  first 2 letters of their mom's maiden name and the first 3 letters of the
  city where they were born.
*******************************************************************************/

function getNewLastName() {
  momMaidenName = READLINE.question("What is your mother's maiden name?: ");
  cityBorn = READLINE.question("What city were you born in?: ");
  let newLastName = momMaidenName.substring(0, 3) + cityBorn.substring(0, 4);
  return newLastName;
}

/******************************************************************************
                                  getTitle()

  This function returns the user's title. To do so, concatenate the last three
  letters of their real last name, reversed, and the model of their dream car.
*******************************************************************************/

function getTitle() {
  dreamCar = READLINE.question("What is your dream car?: ");
  let title = lastName.charAt(lastName.length) + lastName.charAt(lastName.length - 1) + lastName.charAt(lastName.length - 2) + dreamCar; 
  return title;
}

/******************************************************************************
                                  getHonorific()

  This function returns the user's full honorific. To do so, concatenate their
  title, " of ", and the name of the street they live on.
*******************************************************************************/

function getHonorific() {
  street = READLINE.question("What street do you live on?: ");
  title = lastName.charAt(lastName.length) + lastName.charAt(lastName.length - 1) + lastName.charAt(lastName.length - 2) + dreamCar;
  let honorific = title + " of " + street;
  return honorific;
}

/******************************************************************************
                                     run()

  This function runs the program. At the very least it should ask the user
  to answer a series of questions, each setting one of the global variables
  to what the user typed in. It should then call the functions above to produce
  the user's fantasy name (set fantasyName to that), and display it for the user
  to see.
*******************************************************************************/

function run() {
  newFirstName = getNewFirstName();
  newLastName = getNewLastName();
  title = getTitle();
  honorific = getHonorific();

  console.log("Everyone run from "+newFirstName+" "+newLastName+", "+honorific+"!");
}

// Run the program!
run();
