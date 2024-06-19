///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

//+++++++++++++++ coding challenge #1
/*
//1
const [players1, players2] = game.players;
// console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

//4
players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(`Odds: ${team1}, Draw: ${draw}, Team2: ${team2}`);

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
const printGoals = (...players) => {
  // console.log(players);
  // console.log(`${players.length} goals were scored.`);
};

// printGoals('Muller', 'Sweinsteiger', 'Goretzka', 'Gotze', 'Reus');

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

team1 < team2 &&
  console.log(
    `Team 1 is more likely to win with ${team1} odds, which is better than team 2's ${team2}.`
  );
team2 < team1 &&
  console.log(
    `Team 2 is more likely to win with ${team2} odds, which is better than team 1's ${team1}.`
  );
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnabry',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnabry', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

for (const [index, element] of Object.entries(game.scored)) {
  // console.log(`Goal ${parseInt(index) + 1}: ${element}`);
}

// OR:
for (const [index, element] of game.scored.entries()) {
  // console.log(`Goal ${index + 1}: ${element}`);
}

//2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
const oddsList = game.odds;
// console.log(oddsList);

let totalOdd = 0;
// console.log(Object.keys(game.odds));
for (const index of Object.keys(game.odds)) {
  totalOdd += game.odds[index];
}

const avrOdd = totalOdd / Object.keys(game.odds).length;
// console.log(avrOdd);

//3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

// console.log(Object.entries(game.odds));

for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team);
  // console.log(odd);
  // console.log(game[team]);
  const result = team == 'x' ? 'draw' : `victory ${game[team]}`;
  // console.log(`Odd of ${result}: ${odd}`);
}

//BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }

const scorers = {};

for (const player of game.scored) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  console.log(scorers);
}

/*
Throughout the loop:
{ Lewandowski: 1 }
{ Lewandowski: 1, Gnabry: 1 }
{ Lewandowski: 2, Gnabry: 1 }
{ Lewandowski: 2, Gnabry: 1, Hummels: 1 }
*/
