// Questions: https://codingheroes.io/assignments/short-circuiting-and.html

const books = [
  // 'The Burning God', 'Oathbreaker', 'Before They Are Hanged', 'Fires of Vengeance'
  {
    title: 'The Burning God',
    author: 'R.F. Kuang',
    keywords: ['fang runin', 'ancient china', 'magic', 'genocide'],
    publisher: 'Harper Voyager',
    onlineContent: true,
  },
  {
    title: 'Oathbreaker',
    author: 'Brandon Sanderson',
    keywords: ['dalinar', 'stormblessed', 'shardblades'],
    publisher: 'Tor Books',
    onlineContent: false,
  },
  {
    title: 'The Fires of Vengeance',
    author: ['Evan Winter', 'imaginary 2nd author', 'imaginary 3rd author'],
    keywords: ['dragons', 'tau'],
    publisher: 'Orbit',
    onlineContent: true,
  },
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    programmingLanguage: 'Java',
    onlineContent: false,
  },
];

// 5.1
function hasExamplesInJava(book) {
  console.log(book.programmingLanguage === 'Java' || 'no data available');
  return book.programmingLanguage === 'Java' || 'no data available';
}

// hasExamplesInJava(books[3]);

// 5.2
for (i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`"${books[i].title} provides online content."`);
}

for (i = 0; i < books.length; i++) {
  console.log(books[i].onlineContent);
}
