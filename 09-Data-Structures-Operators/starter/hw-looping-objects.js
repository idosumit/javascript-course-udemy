// questions from: https://codingheroes.io/assignments/looping-objects-object-keys-values-and-entries.html

'use strict';

// 11.1

const books = [
  {
    title: 'TypeScript Basics',
    author: 'John Doe',
    pages: 250,
    thirdParty: {
      goodreads: [
        { rating: 4.5 },
        { ratingsCount: 150 },
        { reviewsCount: 30 },
        { fiveStarRatingCount: 100 },
        { oneStarRatingCount: 5 },
      ],
    },
  },
  {
    title: 'JavaScript Essentials',
    author: 'Jane Smith',
    pages: 300,
    thirdParty: {
      goodreads: [
        { rating: 4.7 },
        { ratingsCount: 200 },
        { reviewsCount: 50 },
        { fiveStarRatingCount: 180 },
        { oneStarRatingCount: 2 },
      ],
    },
  },
];

const entries = [];
// console.log(properties);

for (const rating of Object.keys(books[0].thirdParty.goodreads)) {
  entries.push([rating]);
}
// console.log(entries);

for (const [index, property] of Object.values(
  books[0].thirdParty.goodreads
).entries()) {
  entries[index].push(property);
}
// console.log(entries);

//11.3
const entries2 = Object.entries(books[0].thirdParty.goodreads);
// console.log(entries2);

//11.4
console.log('entries: ', entries);
console.log('entries2: ', entries2);
