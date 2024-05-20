'use strict';

/*

============================================ DOM MANIPULATION ===================================================

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number! 🥳'; // Changed the text content

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

// ============================================ HANDLING CLICK EVENTS + DEFINING THE SECRET NUMBER + MANIPULATING CSS STYLES ===================================================
// Event = anything we do to interact with the webpage such as click of the mouse, moving the cursor, etc.

// Let's select the element where want te event to happen. Where we want the code to "LISTEN" to our event. 'Check' button in this case)

// Defining the secret number outside the function
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Math.number gives us random from 0 to 1
// Trunc, as in its name, cuts off numbers away after the decimal. NOT rounding off.

let score = 20; // declaring a variable score that'll keep decreasing if the user guesses incorrectly

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is no input
  if (!guess) {
    displayMessage('No number ⛔️');
  }
  // if there IS a guess and it's correct
  else if (guess === secretNumber) {
    displayMessage('Correct Number! 🥳');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347'; // green color

    document.querySelector('.number').style.width = '30rem'; //.number in the css has 15 rem width (the rectangle), we're doubling itt

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // if the guess is WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📈 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost! 😥');
      document.querySelector('.score').textContent = 0;
    }
  }
});
// btn class in the html file is generic and so we don't need to select it
// function in this code snippet is telling the event (in this case 'click' exactly what to do.) This function does NOT run when the webpage runs. It runs ONLY WHEN the "Check!" button on the webpage is clicked.

/*
============================================ CODING CHALLENGE #1 ===================================================
Implement a game reset functionality, so that the player can make a new guess!

Steps:
1. Select the element with the 'again' class and attach a click event handler.
2. In the handler function, restore initial values of the score and secretNumber variables.
3. Restore the initial conditions of the message, number, score, and the guess input field.
4. Also restore the original background color (#222) and number width (15rem).
*/

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random()) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';

  document.querySelector('.guess').value = ' ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
