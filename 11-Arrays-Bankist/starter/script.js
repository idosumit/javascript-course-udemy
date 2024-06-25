'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

/*
// ======================================= ARRAYS ========================================

let arr = ['a', 'b', 'c', 'd', 'e'];

// ++++++++++++ array slice method (does not mutate)

console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(1, 4)); // ['b', 'c', 'd']
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(1, -1)); // ['b', 'c', 'd']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // // ['a', 'b', 'c', 'd', 'e']

// ++++++++++++ array splice method (does mutate)
// console.log(arr.splice(2)); // ['c', 'd', 'e']
arr.splice(-1);
console.log(arr); // ['a', 'b', 'c', 'd']

// why??? because splice mutates the original array. slice could not do that, because it cannot mutate the original array. slice only creates copies.

// ++++++++++++ array reverse method (does mutate)
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); // ['f', 'g', 'h', 'i', 'j'] --> this gets mutated

// ++++++++++++ CONCAT (does NOT mutate)
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
// or we could also do the spread operator to get the exact same outcome:
console.log([...arr, ...arr2]);

// +++++++++++++ JOIN
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

// ======================================= ARRAYS: NEW `AT` METHOD ========================================

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0)); // same as above

// but why the at method anyway?????
// it is useful for getting the last element
console.log(arr.at(-1)); // 64

// ++++++++ at method also works for strings
console.log('charles'.at(-1)); // s

*/

// ======================================= LOOPING ARRAYS: FOREACH ========================================

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// ++++++ a for-of loop

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${Math.abs(movement)}.`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}.`);
  }
}

// +++++++++++++ achieving the same thing with forEach:
console.log('-----------------forEach()----------------');

// ORDER SHOULD ALWAYS BE: 1st parameter = current element (move here), 2nd parameter = current index (i here), 3rd = entire array we are looping over (arr here)
movements.forEach(function (move, i, arr) {
  if (move > 0) {
    console.log(`Movement ${i + 1}: You deposited ${move}.`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${move}.`);
  }
  console.log(arr); // [200, 450, -400, 3000, -650, -130, 70, 1300]
});
