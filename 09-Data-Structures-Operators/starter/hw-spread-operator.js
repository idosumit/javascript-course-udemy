// Questions: https://codingheroes.io/assignments/the-spread-operator.html

// 3.1
const books = [
  // 'The Burning God', 'Oathbreaker', 'Before They Are Hanged', 'Fires of Vengeance'
  {
    name: 'The Burning God',
    author: 'R.F. Kuang',
  },
  {
    name: 'Oathbreaker',
    author: 'Brandon Sanderson',
  },
  {
    name: 'Fires of Vengeance',
    author: 'Evan Winter',
  },
];

const bookAuthors = [books[0].author, books[1].author];
console.log(bookAuthors);

// 3.2
const spellWord = inputString => {
  console.log('"', ...inputString, '"');
};
spellWord('JavaScript');
