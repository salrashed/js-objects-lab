const pokemon = require('./data.js')

console.log(pokemon)
const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }

  /* Exercise 1 */

  console.log (pokemon [0].name)
  console.log (pokemon [3].name)
  console.log (pokemon [6].name)
  console.log (pokemon [24].name)

 /* Exercise 2 */

console.log(game);

 /* Exercise 3 */

game.difficulty = "Easy","Medium","Hard"; 

console.log(game);

/* Exercise 4 */

const starterPokemon = pokemon.find(p => p.starter); 

game.party.push(starterPokemon);

console.log(game.party);
console.log('------------------');
/* Exercise 5 */

const additionalPokemon = [
  pokemon.find(p => p.type === "Water"),
  pokemon.find(p => p.type === "Electric"), 
  pokemon.find(p => p.hp > 100) 
];

additionalPokemon.forEach(p => game.party.push(p));

console.log(game.party);

/* Exercise 6 */

const gyms = [
  { name: "Pewter City Gym", difficulty: 2, completed: false },
  { name: "Cerulean City Gym", difficulty: 3, completed: false },
  { name: "Vermilion City Gym", difficulty: 1, completed: false },
  { name: "Lavender Town Gym", difficulty: 4, completed: false }
];

gyms.forEach(gym => {
  if (gym.difficulty < 3) {
      gym.completed = true;
  }
});

console.log(gyms);

/* Exercise 7 */

let evolvedPokemon;

if (starterPokemon.name === "Bulbasaur") {
  evolvedPokemon = pokemon.find(p => p.name === "Ivysaur");
} else if (starterPokemon.name === "Charmander") {
  evolvedPokemon = pokemon.find(p => p.name === "Charmeleon");
} else if (starterPokemon.name === "Squirtle") {
  evolvedPokemon = pokemon.find(p => p.name === "Wartortle");
} else if (starterPokemon.name === "Pikachu") {
  evolvedPokemon = pokemon.find(p => p.name === "Raichu");
}

const starterIndex = game.party.indexOf(starterPokemon);
if (starterIndex !== -1) {
  game.party.splice(starterIndex, 1, evolvedPokemon); 
}

console.log(game.party);

/* Exercise 8 */

const party = [
  { name: 'Pikachu' },
  { name: 'Bulbasaur' },
  { name: 'Charmander' },
];

party.forEach(pokemon => {
  console.log(pokemon.name);
});

/* Exercise 9 */

const starterPokemons = pokemon.filter(p => p.starter);

starterPokemons.forEach(pokemon => {
  console.log(pokemon.name); 
});

/* Exercise 10 

const pokemonData = [
  { name: 'Pikachu', type: 'Electric' },
  { name: 'Bulbasaur', type: 'Grass/Poison' },
  { name: 'Charmander', type: 'Fire' },
];

const game = {
  party: [],
  catchPokemon: function(pokemonObj) {
      this.party.push(pokemonObj);
  },
};

const selectedPokemon = pokemonData[0];
game.catchPokemon(selectedPokemon);

console.log(game.party);
*/

/* Exercise 11 

const game = {
  party: [],
  items: [{ name: 'Poké Ball', quantity: 5 }],
  catchPokemon: function(pokemonObj) {
      this.party.push(pokemonObj);
      const pokeball = this.items.find(item => item.name === 'Poké Ball');
      if (pokeball) {
          pokeball.quantity--; 
      }
  },
};

const selectedPokemon = pokemonData[1]; 
game.catchPokemon(selectedPokemon);

console.log(game.party);
console.log(game.items);
*/
/* Exercise 12 */

gyms.forEach(gym => {
  if (gym.difficulty < 6) {
      gym.completed = true; 
  }
});

console.log(gyms);

/* Exercise 13 

const game = {
  party: [],
  items: [{ name: 'Poké Ball', quantity: 5 }],
  gyms: gyms,
  gymStatus: function() {
      const gymTally = {
          completed: 0,
          incomplete: 0,
      };

      this.gyms.forEach(gym => {
          if (gym.completed) {
              gymTally.completed++;
          } else {
              gymTally.incomplete++;
          }
      });

      console.log(gymTally);
  },
};

game.gymStatus();
*/
/* Exercise 14 

const game = {
  party: [],
  items: [{ name: 'Poké Ball', quantity: 5 }],
  gyms: [],
  partyCount: function() {
      return this.party.length; 
  },
};

game.party.push({ name: 'Pikachu' });
game.party.push({ name: 'Bulbasaur' });

const count = game.partyCount();
console.log(`Number of Pokémon in party: ${count}`);
*/
/* Exercise 15 

gyms.forEach(gym => {
  if (gym.difficulty < 8) {
      gym.completed = true; // Set completed to true
  }
});

console.log(gyms);
*/
/* Exercise 16 */

console.log(game);