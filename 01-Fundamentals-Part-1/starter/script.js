/*
let js = 'amazing';

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Kylian";
console.log(firstName);
*/

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');
console.log(typeof Jonas);

/* console gives:
true
boolean
boolean
number
string
undefined


console.log('--------------------');
// -----------------------
javascriptIsFun = 'YES!'; // assigning a new value to an existing variable IS possible in JS since it's dynamic
console.log(typeof javascriptIsFun); // console gives 'string'

console.log('--------------------');

// for undefined type
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log('--------------------');

//An error/bug that exists with typeof
console.log(typeof null); // we get "object". This makes no sense.

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

var job = 'programmer';
job = 'teacher';
*/

//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Jonas';
const lastName = 'Sss';
console.log(firstName + lastName);

// What if I want space between the first & last names?
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--; // x = x - 1
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // true
console.log(ageSarah >= 18); // true

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);