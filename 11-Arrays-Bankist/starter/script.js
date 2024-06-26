'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP ++++++++++++++

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

// ============================== CREATING DOM ELEMENTS ==============================

const displayMovements = function (movements) {
  // this to clear the container first in case there are already some movements displayed
  containerMovements.innerHTML = '';

  // then we loop over the movements array and create html displays for each movement
  movements.forEach(function (mov, i) {
    // we need to determine if the movement is a deposit or a withdrawal
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    // then we create the html for each movement (movement means how the money flows in or out of the account. mov is a term for current element in the array or object)
    const html = `
    <div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
    </div>
    `;

    // below is linking the html const we have created to the containerMovements div (div = division / section) in the html file
    // what containerMovements.insertAdjacentHTML('afterbegin', html); does is that it inserts the html into the containerMovements div, but it does so at the beginning of the div. So, the first movement will be at the top of the list.
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

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

// ======================================= FOREACH FOR MAPS AND SETS ========================================

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// +++++++ MAPS
currencies.forEach(function (value, key, map) {
  // just the same order as the array
  console.log(`${key}: ${value}`);
});

// +++++++ SETS
const currenciesButUnique = new Set(['USD', 'GBP', 'USD', 'EUR']);
console.log(currenciesButUnique); // {'USD', 'GBP', 'EUR'}

currenciesButUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
  // RESULT:
  // USD: USD
  // GBP: GBP
  // EUR: EUR
  // keys and values are the same??? why?
  
  // Well, a set doesn't have keys! And it doesn't have indexes either. And so there is no value that would make sense for the key. So, essentially this key here makes no sense at all. It wouldn't even have to be there. And so the people who designed this forEach method for sets, they could have simply omitted the second argument, right? Well, if they did that, then this forEach would have been different from the others. And so that would then create confusion in developers, and therefore it was decided to keep the same signature.
  
  // So basically, to keep the same three parameters in this callback function and simply to set the second one to the first one.

  // So we can just write value here as well, just to avoid that confusion. In fact, we can do the following:
});

// ++++++ better syntaxing for forEach with Sets:
const currenciesButUniqueAgain = new Set(['USD', 'GBP', 'USD', 'EUR']);
console.log(currenciesButUniqueAgain); // {'USD', 'GBP', 'EUR'}

currenciesButUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

// ======================================= CODING CHALLENGE #1 ========================================

// Solution at: 11-Arrays-Bankist/starter/coding-challenge-1.js

// ======================================= DATA TRANSFORMATIONS: MAP, FILTER, REDUCE ========================================
// helpful illustration at: helpful-illustrations/transformations - map, filter, reduce.png

*/

// ======================================= DATA TRANSFORMATION: MAP ========================================

// let's assume the following is in euros
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1; // just an assumption

// const movementsUSD = movements.map(function (element) {
//   return element * eurToUsd;
// });

// OR using the arrow function
const movementsUSD = movements.map(element => element * eurToUsd);

console.log(movements);
console.log(movementsUSD);

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(function (num) {
  return num * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8]

// // doing the same with for..of loop:
// const movementsUSDForOfLoop = [];
// for (const element of movements) {
//   movementsUSDForOfLoop.push(element * eurToUsd);
// }
// console.log(movementsUSDForOfLoop); // exactly the same

// +++++++ using this to loop over the movements array like above

//example used:
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsDescriptions = movements.map(
  // we didn't even need to add the 3rd parameter of 'array' here (in the arrow function below) since the map doesn't need us to do it
  (element, index) =>
    `Movement ${index + 1}: You ${
      element > 0 ? 'deposited' : 'withdrew'
    } ${Math.abs(element)}.`
);

console.log(movementsDescriptions);
