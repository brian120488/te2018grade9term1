// Author: FirstName LastName
const READLINE = require("readline-sync");

// fantasyName Object
let fantasyNameCreator = {
  firstName: '',
  lastName: '',
  momMaidenName: '',
  cityBorn: '',
  dreamCar: '',
  street: '',
  fantasyName: '',
  
  getNewFirstName: function(){
    /******************************************************************************
      This method returns the user's new first name. To do so, concatenate the
      first 3 letters of their real first name and the first 2 letters of their
      real last name.
    *******************************************************************************/
    this.firstName = READLINE.question("What is your first name?: ");
    this.lastName = READLINE.question("What is your last name?: ");
    let newFirstName = this.firstName.substring(0, 3) + this.lastName.substring(0, 2).toLowerCase();
    return newFirstName;
  },
  getNewLastName: function(){
    /******************************************************************************
      This method returns the user's new last name. To do so, concatenate the
      first 2 letters of their mom's maiden name and the first 3 letters of the
      city where they were born.
    *******************************************************************************/
    this.momMaidenName = READLINE.question("What is your mother's maiden name?: ");
    this.cityBorn = READLINE.question("What city were you born in?: ");
    let newLastName = this.momMaidenName.substring(0, 3) + this.cityBorn.substring(0, 4);
    return newLastName;
  },
  getTitle: function(){
    /******************************************************************************
      This method returns the user's title. To do so, concatenate the last three
      letters of their real last name, reversed, and the model of their dream car.
    *******************************************************************************/
    this.dreamCar = READLINE.question("What is your dream car?: ");
    let title = this.lastName.charAt(this.lastName.length - 1) + this.lastName.charAt(this.lastName.length - 2) + this.lastName.charAt(this.lastName.length - 3) + this.dreamCar; 
    return title;

  },
  getHonorific: function(){
    /******************************************************************************
      This method returns the user's full honorific. To do so, concatenate their
      title, " of ", and the name of the street they live on.
    *******************************************************************************/
    this.street = READLINE.question("What street do you live on?: ");
    let honorific = title + " of " + this.street;
    return honorific;

  },
}



/******************************************************************************
                                     run()

  This function runs the program. In order to generate the full Fantasy Name it needs to:
  1. Ask the user to answer a series of questions, each setting one of the fantasyNameCreator's properties
  to what the user typed in.
  2. Call the methods to produce the piece's of the user's Fantasy Name
  3. Create the full Fantasy name by concatenating the new first name, new last name, a comma, and the honorific
  4. Display it for the user to see.
*******************************************************************************/

function run() {
  newFirstName = fantasyNameCreator.getNewFirstName();
  newLastName = fantasyNameCreator.getNewLastName();
  title = fantasyNameCreator.getTitle();
  honorific = fantasyNameCreator.getHonorific();

  console.log("Everyone run from "+newFirstName+" "+newLastName+", "+honorific+"!");
}

// Run the program!
run();
