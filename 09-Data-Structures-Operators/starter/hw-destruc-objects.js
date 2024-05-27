'use strict';

// 2.1
const books = [
  {
    title: 'Practical Vim',
    author: 'Neil',
    ISBN: 19824579812345,
    keywords: 'key1',
  },
  {
    title: 'sdfgrfhbntdg',
    author: 'sdfcgbed',
    ISBN: 19567345345,
    keywords: 'key2',
  },
  {
    title: 'sdfgrfhbntdg',
    author: 'sdfcgbed',
    ISBN: 19567345345,
    keywords: 'key3',
  },
  {
    title: 'sdfgrfhbntdg',
    author: 'sdfcgbed',
    ISBN: 19567345345,
    keywords: 'key4',
  },
  {
    title: 'sdfgrfhbntdg',
    author: 'sdfcgbed',
    ISBN: 19567345345,
    keywords: 'key5',
  },
  {
    title: 'sdfgrfhbntdg',
    author: 'sdfcgbed',
    ISBN: 19567345345,
    keywords: 'key6',
  },
  {
    title: 's777777',
    author: 'sd777777777777',
    ISBN: 777777777,
    keywords: 'key7',
  },
];
// const { title, author, ISBN } = books[0];
// console.log(title, author, ISBN);

// 2.2
const { keywords: tags } = books[0];
console.log(tags);

// 2.3
const { language, programmingLanguage = 'unknown' } = books[6];
console.log(language, programmingLanguage);

// 2.4
let bookTitle = 'unknown';
let bookAuthor = 'unknown';

({ title: bookTitle, author: bookAuthor } = books[0]);
console.log(bookTitle, bookAuthor);

// 2.5
const printBookInfo = ({ title, author, year = 'year unknown' }) => {
  console.log(`"${title} by ${author}, ${year}"`);
};

printBookInfo({
  title: 'Algorithms',
  author: 'Robert Sedgewick',
  year: 1998,
});
