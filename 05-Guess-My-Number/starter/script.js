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

// ============================================ HANDLING CLICK EVENTS ===================================================
// Event = anything we do to interact with the webpage such as click of the mouse, moving the cursor, etc.

// Let's select the element where want te event to happen. Where we want the code to "LISTEN" to our event. 'Check' button in this case)

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number ⛔️';
  }
});
// btn class in the html file is generic and so we don't need to select it
// function in this code snippet is telling the event (in this case 'click' exactly what to do.) This function does NOT run when the webpage runs. It runs ONLY WHEN the "Check!" button on the webpage is clicked.
