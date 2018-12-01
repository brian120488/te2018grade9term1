/*
** Welcome to Castle
** 
**
*/
const READLINE = require('readline-sync');


let playerDeck, playerCards, player;
let enemyDeck, enemyCards, enemy;
let rounds = 0;
let keepPlaying = true; 

//Set up castles
let playerCastle = {
	health: 100
};

let enemyCastle = {
	health: 100 
};

//TODO: Add more card objects
let ogre = {
	name: 'Ogre',
	weapon: 'club',
	attack: 5,
	health: 25
};

let wizard = {
	name: 'Grand Wizard',
	weapon: 'wand',
	attack: 20,
	health: 10
};

let dragon = {
	name: 'Dragon',
	weapon: 'fire',
	attack: 25,
	health: 20
};

let knight = {
	name: 'Knight',
	weapon: 'sword',
	attack: 10,
	health: 20
};

let cannon = {
	name: 'Glass Cannon',
	weapon: 'cannon',
	attack: 25,
	health: 10
};

let soldier = {
	name: 'Soldier',
	weapon: 'AK-47',
	attack: 15,
	health: 30,
};

let tank = {
	name: 'Tank',
	weapon: 'bomb shells',
	attack: 25,
	health: 25
};

let commander = {
	name: 'Commander',
	weapon: 'minigun',
	attack: 20,
	health: 30
};

let zombie = {
	name: 'Zombie',
	weapon: 'N/A',
	attack: 5,
	health: 35
};

let brian = {
	name: 'Brian',
	weapon: 'hacks',
	attack: 25,
	health: 15
};

let jack = {
	name: 'Jack',
	weapon: 'stuff',
	attack: 20,
	health: 5
};


//TODO: Add the names for your card objects to this list
//Tip: Don't forget the commas
let deck = [ogre, wizard, dragon, knight, cannon, soldier, tank, commander, zombie, brian, jack];

//Runs each new round as long as a castle has not been destroyed and the user wants to keep playing
while(playerCastle.health > 0 && enemyCastle.health > 0 && keepPlaying) {
	beginRound();
	displayHand(playerCards);
	player = choosePlayerCard();
	enemy = chooseEnemyCard();


	//TODO: Print the details of the card the computer uses 
	
	console.log(`Enemy played: ${enemy.name}  	
		Attack: ${enemy.attack}pts     
		Health: ${enemy.health}pts `);

	//TODO: Determine the winning card based on Castle points system in manual. 
	
	while(player.health > 0 && enemy.health > 0){
		if(player.attack >= enemy.attack) {
			enemy.health = enemy.health - player.attack;
			player.attack = player.attack - enemy.health;
		}
			
		else if(enemy.attack > player.attack) {
			player.health = player.health - enemy.attack;
			enemy.attack = enemy.attack - player.health;
		}

			if(enemy.health > 0 && player.attack > enemy.attack) {
				player.health = player.health - enemy.attack;
			}
			
			else if(enemy.health <= 0 && player.attack > enemy.attack) {
				enemyCastle.health = enemyCastle.health - player.attack;
			}
			
			else if(player.health > 0 && enemy.attack > player.attack) {
				enemy.health = enemy.health - player.attack;
			}
			
			else if(player.health <= 0 && enemy.attack > player.attack) { 
				playerCastle.health = playerCastle.health - enemy.attack;
			}
	}

		
	
	
		


	//TODO: Print player card that won this round 
	



	//TODO: Print remaining castle health points
	console.log(`Castle HP: ${playerCastle.health}`);
	console.log(`Enemy Castle HP: ${playerCastle.health}`);


	deleteDeadCards();
	

	//TODO: Bonus!: Riddles - See level ups in Castle manual. 
	//If you want to run the riddles, set the value inside to true.
	playRiddles(false);

	//Allow user a chance to quit the game
	quitOrPlayOn();



}	

//TODO: Print the winner of the game.




/*-------------------Game Ends Here ------------------------*/
/*-------- Code below does not need to be modified ---------*/


function beginRound() {
	rounds++;
	console.log(`**********************************
	    Round ${rounds}!
**********************************`);
	selectHands();	
}

function selectHands() {
	playerDeck = JSON.parse(JSON.stringify(deck));
	enemyDeck = JSON.parse(JSON.stringify(deck));
	playerCards = [];
	enemyCards = [];
	let i;
	for (i=0; i < 5; i++) {
		let randomNumber = Math.floor(Math.random()*playerDeck.length);
		let card1 = playerDeck[randomNumber];
		playerCards.push(card1);
		playerDeck.splice(randomNumber, 1);
		let randomNumber2 = Math.floor(Math.random()*enemyDeck.length);
		let card2 = enemyDeck[randomNumber2];
		enemyCards.push(card2);
		enemyDeck.splice(randomNumber2, 1);
	}
}

function displayHand(cards) {
	console.log(`You have available ${cards.length} cards:`);
	i = 0;
	while(i < cards.length) {
		console.log(`${i}. ${cards[i].name}      
		Attack: ${cards[i].attack}pts     
		Health: ${cards[i].health}pts `);
		i++;
	}
}

function choosePlayerCard() {
	let cardNumber = READLINE.question("Which card will you play? Enter the number: ");
	return playerCards[cardNumber];
}

function chooseEnemyCard() {
	return enemyCards[Math.floor(Math.random()*enemyCards.length)];
}

function deleteDeadCards() {
	for (i=0; i < playerCards; i++) {
		if(playerCards[i].health <= 0 || playerCards[i].attack <= 0) {
			playerCards.splice(i, 1);
		}

		if(enemyCards[i].health <= 0 || enemyCards[i].attack <= 0) {
			enemyCards.splice(i, 1);
		}
	}
}

function quitOrPlayOn() {
	let answer = READLINE.question(`Ready to continue? y/n: `);
	if(answer == "y" || answer == "Y") {
		keepPlaying = true;
	}
	else {
		keepPlaying = false;
	}
}

//BONUS: Modify the code in this function to add riddles to the game. 
function playRiddles(willRun) {
	if(rounds % 2 == 0 && willRun == true) {
		//Code that randomly selects a block with a riddle.
		let randomNumber = Math.floor(Math.random()*4);
		switch(randomNumber) {
		    //Guess my number riddle
		    case 0:
		        let number = Math.floor(Math.random()*10);
		        let guess = READLINE.question("I'm thinking of a number from 0 - 9. What is it?: ");
		        //TODO: Finish the game. If they guess the number correctly, playerCastle gets 10 extra health points. 
		        break;
		    case 1:
		        console.log("Sorry! Our engineers are still working on this one.");
		        break;
		    case 2:
		        console.log("Sorry! Our engineers are still working on this one.");
		        break;
		    case 3:
		        console.log("Sorry! Our engineers are still working on this one.");
		        break;
		    default:
		        console.log("Oops! Error. Try again later.")
		}
	}
}

