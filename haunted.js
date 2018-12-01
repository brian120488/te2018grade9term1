  const READLINE = require("readline-sync");

let enterHouse;
let checkHouse;
let houseEntrance;
let tryToEnter;
let helpGhost;
let endGame;

let secret = false;
let vbucks;

let player = {
  status: undefined,
  courage: 0,
  intellect: 0,
  strength: 0,
  awesomeness: 0,
  weapon: "fists",
  item: "flashlight",
};

console.log("*** WELCOME TO THE HAUNTED HOUSE ***");
console.log(`You stand in front of a spooky haunted house.`);
console.log(`You hear what sounds like screaming coming from inside the house.`);
enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "yes") {
  player.courage + 10;
  console.log(`You prepare your bare ${player.weapon} and open the door...and immediately die.`);
  player.status = "Dead";
  console.log(
`status: ${player.status}
courage: ${player.courage}
intellect: ${player.intellect}
strength: ${player.strength}
awesomeness: ${player.awesomeness}
weapon: ${player.weapon}
item: ${player.item}`);
}

else if(enterHouse == "no") {
  player.awesomeness++;
  console.log(`You decide not to open the door.`);
  checkHouse = READLINE.question("Should you explore around the house or just yeet this place? (explore or yeet)");
}

  if(checkHouse == "explore") {
    player.courage++;
    player.intellect++;
    console.log(`You go to the back of the house and find an axe. Nice!`);
    player.weapon = "axe";
    houseEntrance = READLINE.question("Will you enter from the back or front door? (back or front)"); 
  }
  
  else if(checkHouse == "yeet") {
    player.awesomeness = 9001;
    player.status = "Alive";
    console.log(
`Ok, you left the haunted house! :)
status: ${player.status}
courage: ${player.courage}
intellect: ${player.intellect}
strength: ${player.strength}
awesomeness: ${player.awesomeness}
weapon: ${player.weapon}
item: ${player.item}`);
  }

    if(houseEntrance == "back") {
      player.intellect + 2;
      tryToEnter = READLINE.question("The door won't budge! Should we go to the front or keep trying? (front or try again)");
    }

    else if(houseEntrance == "front") {
      player.status = "Alive";
      player.courage + 4;
      player.awesomeness + 5;
      player.weapon = "Flaming Sword";
      player.item = "shield";
      console.log('EY! You found a cool fire sword and a shield! Nice!');
      endGame = READLINE.question('Should you continue on or leave with what you have? (continue/leave)');
    }

      if(endGame == "continue") {
        secret = true;
        player.courage + 5;
        player.awesomeness = 9002;
        player.status == "Strongest Player In The World";
        console.log('It just so happens that the sword that you had found was the rarest sword in the world, so you easily beat all the monsters including the hilariously easy final boss.');
        console.log(
`status: ${player.status}
courage: ${player.courage}
intellect: ${player.intellect}
strength: ${player.strength}
awesomeness: ${player.awesomeness}
weapon: ${player.weapon}
item: ${player.item}`);
      }
       
      else if(endGame == "leave") {
      player.awesomeness + 3;
      player.courage - 5;
      player.status = "Alive";
      console.log('You decide the leave the haunted house, hoping someone else will defeat it for you...');
      console.log(
`status: ${player.status}
courage: ${player.courage}
intellect: ${player.intellect}
strength: ${player.strength}
awesomeness: ${player.awesomeness}
weapon: ${player.weapon}
item: ${player.item}`)
      }
      
      if(tryToEnter == "front") {
        player.status = "Dead";
        player.courage + 2;
        helpGhost = READLINE.question("Oh, right when you open the door you see a ghost somehow on fire, frantically trying blow it away! Should you help? (yes or no)");
      }
      
      else if(tryToEnter == "try again") {
      player.intellect + 1;
      player.strength + 2;
      player.status = "Alive";
      console.log('The door still does not open, so you rage quit like you always do when you play Minecraft.');
      console.log(
`status: ${player.status}
courage: ${player.courage}
intellect: ${player.intellect}
strength: ${player.strength}
awesomeness: ${player.awesomeness}
weapon: ${player.weapon}
item: ${player.item}`); 
      }

        if(helpGhost == "yes" || helpGhost == "no") {
          player.status = "Dead";
          console.log(`You want to help the ghost, but you are just too scared. Then, the ghost is able to destinguish the fire and sees that you didn't even bother to try to help him. Before you even get the chance to run, youare immobilized and see a hand stick right through your chest, blood spilling out of it.`);
          console.log(      
`status: ${player.status}
courage: ${player.courage}
intellect: ${player.intellect}
strength: ${player.strength}
awesomeness: ${player.awesomeness}
weapon: ${player.weapon}
item: ${player.item}`);
        } 
    

if(secret == false || secret == true) {
  console.log("Thanks for playing!");
  if(secret == true){
    vbucks = READLINE.question("                                                                                                                                                                               how much vbucks pl0x?");
  }
}
  if(vbucks >= 0) {
    console.log("Fortnite is trash.");
    if(vbucks > 0) {
      console.log("GIVE ME ALL YOUR VBUCKS!!!");
      if(vbucks >= 10000) {
        console.log("l m a o   u   p00r");
        if(vbucks >= 1000000) {
          console.log("Give me your account, and I will give you free vbucks. No scam. Please. I have the omega and raven skin. I'm cool. .-.");
        }
      }
    }
  }    