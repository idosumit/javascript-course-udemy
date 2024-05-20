'use strict';

// selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1'); // another great way to get elements fast
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

btnRoll.addEventListener('click', function () {
  // 1. generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  // 3. check whether the rolled is 1 -> if true, switch to the other player
  if (dice !== 1) {
    // add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
    // toggle method adds the class if it is NOT there and removes the class if it is there. Pretty nice. In this case, toggle basically adds or removes the 'player--active' class thereby switching the background colours.
  }
});
