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

// ++++++++ IMPORTANT: JS does not have pass by reference. ONLY pass values. Even the object above was not passing by reference, it was value.

// ========================================== FIRST-CLASS AND HIGHER-ORDER FUNCTIONS =========================================
// illustrative description at: helpful-illustrations/first class functions v higher order functions.png

*/

// ========================================== FUNCTIONS ACCEPTING CALLBACK FUNCTIONS =========================================

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
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
