// Questions: https://codingheroes.io/assignments/rest-pattern-and-parameters.html

'use strict';
const books = [
  // 'The Burning God', 'Oathbreaker', 'Before They Are Hanged', 'Fires of Vengeance'
  {
    title: 'The Burning God',
    author: 'R.F. Kuang',
    keywords: ['fang runin', 'ancient china', 'magic', 'genocide'],
    publisher: 'Harper Voyager',
  },
  {
    title: 'Oathbreaker',
    author: 'Brandon Sanderson',
    keywords: ['dalinar', 'stormblessed', 'shardblades'],
    publisher: 'Tor Books',
  },
  {
    title: 'The Fires of Vengeance',
    author: ['Evan Winter', 'imaginary 2nd author', 'imaginary 3rd author'],
    keywords: ['dragons', 'tau'],
    publisher: 'Orbit',
  },
];

// 4.1
const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword);
console.log(rest);

// 4.2
const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher);
console.log(restOfTheBook);

// 4.3
function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors.`);
}

printBookAuthorsCount(books[2].title, ...books[2].author);
