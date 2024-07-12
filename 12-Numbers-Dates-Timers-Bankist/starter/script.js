'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/*
// ======================== CONVERTING & CHECKING NUMBERS ========================

console.log(23 === 23.0);

//++++++++ Conversion
console.log(Number('23'));
// OR:
console.log(+'23');

//++++++++ Parsing (a number from a string)
console.log(Number.parseInt('30px')); // 30 (string has to start with a num)
console.log(Number.parseInt('e23')); // NaN

console.log(Number.parseInt('30px', 10)); // explicitly saying it's an integer with the base 10

console.log(Number.parseFloat('2.5rem')); // 2.5

console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false
console.log(Number.isNaN(+'20x')); // true

// ++++++++ a better way to determine if number or not
console.log(Number.isFinite(20)); // true
console.log(Number.isFinite('20')); // false
console.log(Number.isFinite(+'20x')); // false
console.log(Number.isFinite(23 / 0)); // false

// ======================== MATH & ROUNDING ========================
console.log(Math.sqrt(25)); // 5
console.log(25 ** (1 / 2)); // 5

console.log(Math.max(5, 18, 23, 11, 2)); // 23
console.log(Math.max(5, 18, '23', 11, 2)); // 23
console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

console.log(Math.min(5, 18, 23, 11, 2)); // 2

//++++++ Area of a circle (pi * r^2)
console.log(Math.PI * Number.parseFloat('10px') ** 2);

//++++++ Random number generation
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

// OR
const randomIntWithRound = (min, max) =>
  Math.round(Math.random() * (max - min) + min);

console.log(randomInt(5, 10));
console.log(randomIntWithRound(5, 10));

//++++++ Rounding integers
console.log(Math.round(2.6));

// +++++ Rounding floating point numbers
console.log((2.7).toFixed(0)); // 3 (a string btw)
console.log((2.7).toFixed(3)); // 2.700
console.log((2.345).toFixed(2)); // 2.35
console.log(+(2.345).toFixed(2)); // 2.35 (a number!)

// ======================== THE REMAINDER OPERATOR ========================
console.log(5 % 2); // 1
console.log(5 / 2); // 2.5

console.log(8 % 3); // 2

// ++++++ function that gives us odd or even
const fnForOddOrEvenCalc = number => (number % 2 === 0 ? 'Even' : 'Odd');
console.log(fnForOddOrEvenCalc(3643));

// ======================== NUMERIC SEPARATORS ========================

const diameter = 287_460_000_000;
console.log(diameter);

const priceInCents = 345_99;
console.log(priceInCents);

const transferFee = 15_00;

// const PI = 3._1415; // not allowed

console.log(Number('230_000')); // NaN

// ======================== BIG INT ========================
console.log(2 ** 53 - 1); // 9007199254740991 => this is the limit
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

console.log(3409865039609857094889079); // 3.409865039609857e+24, probably not correct since precision is lost

// so we could do this:
console.log(3409865039609857094889079n); // 3409865039609857094889079n

// OR just by using the BigInt() function:
console.log(BigInt(3409865039609857094889079)); // 3409865039609856838860800n => this looks a bit different than the one above though, why? Maybe we should use BigInt() only with smaller numbers

// ++++++++++ Operations with these numbers
console.log(100000n + 100000n); // 200000n
console.log(23509808957604302836095804897349806953n * 1000000000000n); // 23509808957604302836095804897349806953000000000n
// console.log(Math.sqrt(16n)); // error, doesn't work with BigInt

const huge = 23509808957604302836095804897349806953n;
const num = 23;
console.log(huge * BigInt(num)); // 541275021006099658410032517849696593719n

console.log(20n > 5); // true
console.log(20n === 20); // false
console.log(typeof 20n); // bigint
console.log(20n == 20); // true
console.log(20n == '20'); // true

console.log(huge + ' is really BIG!'); // 23509808957604302836095804897349806953 is really BIG!

console.log(10n / 3n); // 3n, decimals are cut off
console.log(11n / 3n); // 3n, decimals are cut off
console.log(12n / 3n); // 4n

*/

// ======================== CREATING DATES ========================
// ++++++++++++ create a date
// ==== way 1
const now = new Date();
console.log(now); // Fri Jul 12 2024 11:24:43 GMT+0900 (Japan Standard Time)

// ==== way 2
console.log(new Date('Jul 12 2024, 14: 00')); // Fri Jul 12 2024 00:00:00 GMT+0900 (Japan Standard Time)
// javascript automatically understands and logs the date & time
console.log(new Date('Aug 26, 2001')); // Sun Aug 26 2001 00:00:00 GMT+0900 (Japan Standard Time)

console.log(new Date(account1.movementsDates[0])); //  Tue Nov 19 2019 06:31:17 GMT+0900 (Japan Standard Time)

console.log(new Date(2024, 7, 12, 14, 4, 44)); // Fri Aug 12 2024 14:04:44 GMT+0900 (Japan Standard Time)

// ==== way 3
console.log(new Date(0)); // Thu Jan 01 1970 09:00:00 GMT+0900 (Japan Standard Time) => this is the Unix time, the 0th second of 1970
console.log(new Date(3 * 24 * 60 * 60 * 1000)); // Sun Jan 04 1970 09:00:00 GMT+0900 (Japan Standard Time) => 3 days after the Unix time
