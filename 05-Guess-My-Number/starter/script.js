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
const secretNumber = Math.trunc(Math.random() * 20) + 1;
// Math.number gives us random from 0 to 1
// Trunc, as in its name, cuts off numbers away after the decimal. NOT rounding off.
document.querySelector('.number').textContent = secretNumber;

let score = 20; // declaring a variable score that'll keep decreasing if the user guesses incorrectly

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number ⛔️';
  }
  // if there IS a guess and it's correct
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🥳';

    document.querySelector('body').style.backgroundColor = '#60b347'; // green color

    document.querySelector('.number').style.width = '30rem'; //.number in the css has 15 rem width (the rectangle), we're doubling it

    // if the guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost! 😥';
      document.querySelector('.score').textContent = 0;
    }

    // if the guess is low
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
