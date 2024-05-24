'use strict';

// question source: https://codingheroes.io/assignments/destructuring-arrays.html

// 1.1
const books = ['A Brief History of Time', 'Practical Vim'];
const [firstBook, secondBook] = books;
// console.log(secondBook, firstBook);

// 1.2
const [, , thirdBook] = books;
// console.log(thirdBook);

// 1.3
const ratings = [
  ['rating', 4.19],
  ['ratingsCount', 144584],
];

const [[, rating], [, ratingsCount]] = ratings;
// console.log(rating, ratingsCount);

// 1.4
const ratingStars = [63405, 1808];
const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, threeStarRatings, oneStarRatings);
