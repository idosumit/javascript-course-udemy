// questiona from: https://codingheroes.io/assignments/optional-chaining.html

'use strict';

// 10.1
const book = [
  {
    title: 'TypeScript Basics',
    author: 'John Doe',
    pages: 250,
    keywords: ['typescript', 'programming', 'javascript'],
  },
  {
    title: 'JavaScript Essentials',
    author: 'Jane Smith',
    pages: 300,
  },
];

const newBook2 = [
  {
    title: 'JavaScript Essentials',
    author: 'Jane Smith',
    pages: 300,
  },
];

function getFirstKeyword(book) {
  return book.keywords?.[0];
}

console.log(getFirstKeyword(book[0]));
console.log(getFirstKeyword(newBook2));
