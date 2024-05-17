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

// ============================================ HANDLING CLICK EVENTS + DEFINING THE SECRET NUMBER ===================================================
// Event = anything we do to interact with the webpage such as click of the mouse, moving the cursor, etc.

// Let's select the element where want te event to happen. Where we want the code to "LISTEN" to our event. 'Check' button in this case)

// Defining the secret number outside the function
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// Math.number gives us random from 0 to 1
// Trunc, as in its name, cuts off numbers away after the decimal. NOT rounding off.
document.querySelector('.number').textContent = secretNumber;

let score = 20; // declaring a variable score that'll keep decreasing if the user guesses incorrectly

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number ⛔️';
  }
  // if there IS a guess
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🥳';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost! 😥';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost! 😥';
      document.querySelector('.score').textContent = 0;
    }
  }
});
// btn class in the html file is generic and so we don't need to select it
// function in this code snippet is telling the event (in this case 'click' exactly what to do.) This function does NOT run when the webpage runs. It runs ONLY WHEN the "Check!" button on the webpage is clicked.
