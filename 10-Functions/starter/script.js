'use strict';

/*

// ========================================== DEFAULT PARAMETERS =========================================
const bookings = [];

const createBoking = function (flightNum, numPassengers = 1, price = 199) {
  //   // old way (ES5) of setting default parameters
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', undefined, 100); // skipping a default parameter

// ========================================== PASSING ARGUMENTS: VALUE V REFERENCE =========================================

const flight = 'LH234';
const charles = {
  name: 'Charles Barkley',
  passport: 2478042984,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2478042984) {
    alert('Check-in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, charles);
// console.log(flight);
// console.log(charles);

// is the same as doing...
// const flightNum = flight; // primitives won't change, their created copies (in this case flighNum) will
// const passenger = charles; // objects can be changed

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random()) * 1000000000000000;
};

newPassport(charles);
checkIn(flight, charles);

// ++++++++ IMPORTANT:
// 	1.	Primitives: In JavaScript, primitive values (like string, number, boolean, null, undefined, symbol, and bigint) are passed to functions by value. This means that the function gets a copy of the original value. Changes to the parameter inside the function do not affect the original value.
//  2.	Objects: Objects (including arrays and functions) are passed by reference. This means that the function gets a reference to the original object, and changes to the object inside the function will affect the original object.

// ========================================== FIRST-CLASS AND HIGHER-ORDER FUNCTIONS =========================================
// illustrative description at: helpful-illustrations/first class functions v higher order functions.png

// ========================================== FUNCTIONS ACCEPTING CALLBACK FUNCTIONS =========================================

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  console.log(first, ...others);
  return [first.toUpperCase(), ...others].join(' ');
};

// higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is nice.', upperFirstWord);

transformer('JavaScript is nice.', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Charles', 'Ernie', 'The Jet'].forEach(high5);

// ========================================== FUNCTIONS RETURNING NEW FUNCTIONS =========================================

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Charles');
greeterHey('The Jet');

// ++++++ doing this all in one go
greet('Hello')('Ernie');

// +++++++++++++++ rewriting the function above with only arrow function

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

const heyArrow = greetArrow(`What's popping`);
heyArrow('Shaq');
greetArrow("What's popping")('Draymond');

// ========================================== CALL AND APPLY METHODS =========================================

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}.`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}, ${name}` });
  },
};

lufthansa.book(239, 'Charles Barkley');
lufthansa.book(639, 'Jamal Musiala');
// console.log(lufthansa);

// +++ let's say there's a new airline now
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Thomas Muller'); ==> this does not work

//++++++++++++ Call method: this works
book.call(eurowings, 23, 'Thomas Muller'); // here, 'this' has been set to eurowings because of the call method.

book.call(lufthansa, 239, 'LeBron');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Kenny the Jet');
console.log(swiss);

// +++++++++++ Apply method
const flightData = [583, 'Kai Havertz'];
book.apply(swiss, flightData);
console.log(swiss);

// Instead of apply, however, we do the following a lot:
book.call(swiss, ...flightData);

// ========================================== BIND METHOD =========================================
const bookEW = book.bind(eurowings);

bookEW(23, 'Rafael Mike');
const bookLH = book.bind(lufthansa);
bookLH(33, 'Katt Williams');

// going further to make the function even simpler
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Harper Mason');
bookEW23('Javier Pastore');

// +++++++++++++++++++= situations for when we use bind methods
// ++++++ with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

// Rewriting the above with functions

const addTaxRate = rate => value => value + value * rate;
// same as:
// const addtaxFunction = function (rate){
//   return function(value){
//     return value + value * rate;
//   };
// };

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

// ========================================== CODING CHALLENGE #1 =========================================
// Solution at: 10-Functions/starter/script.js

// ========================================== IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE) =========================================
const runOnce = () => {
  console.log(`This will never run again`);
};

runOnce();

// immediately invoked function expression (IIFE)
(() => console.log(`This will never run again.`))();

(function () {
  console.log(`This will never run again.`);
})();

{
  const isPriv = 23;
  var notPriv = 46;
}

console.log(notPriv); // 46
// console.log(isPriv); // error

*/
// ========================================== CLOSURES =========================================

const secureBooking = () => {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

// A closure is the closed-over variable environment of the execution context in which a function was created, even after that
// execution context is gone;

// 👉 A closure gives a function access to all the variables of its parent function, even after that parent function has returned. The
// function keeps a reference to its outer scope, which preserves the scope chain throughout time.

// 👉 A closure makes sure that a function doesn’t lose connection to variables that existed at the function’s birth place.

// 👉 A closure is like a backpack that a function carries around wherever it goes. This backpack has all the variables that were
// present in the environment where the function was created.

// example

console.dir(booker);

//+++++++++++++ MORE CLOSURES
let f;
const g = () => {
  const a = 23;
  f = () => {
    console.log(a * 2);
  };
};

const h = () => {
  const b = 777;
  f = () => {
    console.log(b * 2);
  };
};

g();
f();

// Reassigning f function
h();
f();

// Example 2
const boardPassengers = (n, wait) => {
  const perGroup = n / 3;

  setTimeout(function () {
    `We are now boarding all ${n} passengers.`;
    console.log(`There are 3 groups, each with ${perGroup} passengers.`);
  }, wait * 1000);
  console.log(`will start boarding in ${wait} seconds.`);
};

const perGroup = 1000; // won't give us 1000 but 60
boardPassengers(180, 3);
