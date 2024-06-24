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

*/
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

/*

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
*/
