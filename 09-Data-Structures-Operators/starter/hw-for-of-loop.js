// questions are from: https://codingheroes.io/assignments/looping-arrays-the-for-of-loop.html

'use strict';

// 8.1
const books = [
  { title: 'Book 1', pages: 150, author: 'Author A' },
  { title: 'Book 2', pages: 200, author: ['Author B', 'Author C'] },
  { title: 'Book 3', pages: 300, author: 'Author D' },
  { title: 'Book 4', pages: 120, author: ['Author E', 'Author F', 'Author G'] },
  { title: 'Book 5', pages: 250, author: 'Author H' },
  { title: 'Book 6', pages: 350, author: ['Author I', 'Author J'] },
  { title: 'Book 7', pages: 400, author: 'Author K' },
  { title: 'Book 8', pages: 180, author: ['Author L', 'Author M', 'Author N'] },
  { title: 'Book 9', pages: 220, author: 'Author O' },
  { title: 'Book 10', pages: 280, author: ['Author P', 'Author Q'] },
];

let pageSum = 0;
for (let book of books) {
  pageSum += book.pages;
}

// console.log(pageSum);

// 8.2
const allAuthors = [];
for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else {
    for (const author of book.author) {
      allAuthors.push(author);
    }
  }
}

// console.log(allAuthors);

// 8.3
for (const [counter, element] of allAuthors.entries()) {
  console.log(`${counter + 1}. ${element}`);
}
