// questions from: https://codingheroes.io/assignments/sets.html

'use strict';

//12.1
const books = [
  {
    title: 'Introduction to Computer Science',
    author: 'John Smith',
    keywords: [
      'computer science',
      'programming',
      'technology',
      'artificial intelligence',
    ],
  },
  {
    title: 'Advanced Programming Techniques',
    author: 'Jane Doe',
    keywords: [
      'programming',
      'algorithms',
      'data structures',
      'web development',
    ],
  },
  {
    title: 'Web Development Essentials',
    author: 'Alice Johnson',
    keywords: ['web development', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Data Science for Beginners',
    author: 'Bob Brown',
    keywords: [
      'data science',
      'statistics',
      'machine learning',
      'computer science',
      'business',
    ],
  },
  {
    title: 'Understanding Artificial Intelligence',
    author: 'Carol White',
    keywords: [
      'artificial intelligence',
      'machine learning',
      'deep learning',
      'computer science',
    ],
  },
];

const allKeywords = [];

for (const book of books) {
  allKeywords.push(...book.keywords);
  //   console.log(`after every loop: ${allKeywords}\n`);
}

// console.log(allKeywords);

// 12.2

const uniqueKeywords = new Set(allKeywords);
// console.log(uniqueKeywords);

// 12.3
uniqueKeywords.add('coding').add('science');
// console.log(uniqueKeywords);

// 12.4
uniqueKeywords.delete('business');
// console.log(uniqueKeywords);

// 12.5
const uniqueKeywordsArr = [...uniqueKeywords];
// console.log(uniqueKeywordsArr);

// 12.6
uniqueKeywords.clear();
console.log(uniqueKeywords);
