let hero = {
  name: 'Harry Potter',
  superpower: 'Witchcraft and Wizardry',
  strength: 12,
  hearts: 20,
};

let villain = {
  name: 'Voldemort',
  strength: 9,
  hearts: 25,
  battleCry: function() {
    let catchphrase = "You're a fool Harry Potter, and you will lose";
    return catchphrase;
  }
};

/*                          *********************************
      Each of these problems has more than one way to solve it, but all are related to scope.
      Uncomment one problem at a time as you complete each.
      Try solving them yourself and then compare strategies with your neighbor.
                            *********************************
*/





/*                      **** Problem 1 *****
   We want to update the villain's catchphrase, and then use battleCry to print it.
   But it doesn't work quite right... fix it!
*/
 console.log('***** Problem 1 *****');
 villain.catchphrase = 'Avada Kedavra!';
 console.log(`The next line should print: ${villain.catchphrase}`);
 villain.battleCry();
 console.log(villain.catchphrase);
 console.log('\n\n\n\n\n');







/*                       **** Problem 2 *****
   Scope matters within conditionals too.
   Uncomment the following code to get started.
   Figure out why it gives you an error and then fix it!
*/
console.log('***** Problem 2 *****');
if(hero.strength > villain.strength) {
  let stronger = hero.name;
  console.log(`The stronger player is ${stronger}`);
  console.log('\n\n\n\n\n');
}





/*                      ***** Problem 3 *****
   Functions also have their own scope. There are many ways to solve this one as well.
   Try to find a couple of different ways to make both console.log statements print the same name.
*/

console.log('***** Problem 3 *****');
function createAHero(name) {
  hero = {
    name: name,
    hearts: 20,
    strength: 10,
  };
   console.log(`Within our function, our hero is ${hero.name}`);
}

createAHero('Hermione');

console.log(`But outside of our function our hero is still ${hero.name}`);
console.log('\n\n\n\n\n');


