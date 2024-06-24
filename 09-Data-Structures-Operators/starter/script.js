'use strict';

/*

// ============================================ CODING CHALLENGE #1 ===================================================
// My answer at: 09-Data-Structures-Operators/starter/coding-challenge-1.js

/*
============================================ Mutating Variables While Destructuring Objects ===================================================


// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // adding a method here
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // adding a new function for destructuring
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },
};

restaurant.orderDelivery({
  time: '23:30',
  address: 'Shinjuku-ku, Tokyo',
  mainIndex: 2,
  starterIndex: 0,
});

restaurant.orderDelivery({
  address: 'Shinjuku-ku, Tokyo',
  starterIndex: 1,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// ==== Default values =====
// defining 'menu' by setting a default value of [], and changing starterMenu to starters
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// ===== Mutating variables =====
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj); // can't just write {a, b}, need parenthesis
console.log(a, b); // output: 23, 7

// ===== Nested objects =====
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

// ======== DESCRUCTURING ARRAYS PRACTICE BELOW =========

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// // if we do this, the second element will be skipped, and the 'secondary' here becomes the third element.
// console.log(main, secondary); // gives: Italian Vegetarian

// // if we want to switch these two variables:
// // // one way:
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary); // output: Vegetarian, Italian

// // the other way:
// [main, secondary] = [secondary, main];
// console.log(main, secondary); // Output: Vegetarian, Italian

// // receiving 2 return values from a function
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// ============================================ Nested Destructuring ===================================================
// const nested = [2, 4, [5, 6]];
// // let's say we wanted to get 2 and [5,6], we should do:
// const [i, , j] = nested;
// console.log(i, j); // output: 2 [5,6]

// // what if we wanted to get all individual numbers (and not a number and another array like above)?
// const nestedNew = [2, 4, [5, 6]];
// const [i1, , [j1, k1]] = nestedNew;
// console.log(i1, j1, k1); // output: 2 5 6

// // ================ Default values ==================
// // const [p, q, r] = [8, 9];
// // console.log(p, q, r); // output: 8 9 undefined

// // Let's do this instead
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // output: 8 9 1

// ============================================ Spread Operator ===================================================

const arr = [7, 8, 9];
const badArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badArr);

const goodArr = [1, 2, ...arr];
console.log(goodArr); // output: [1, 2, 7, 8, 9]

// ============== Going more complex

// Example from above:

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  // adding method here for spread operator
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  },

  // adding yet another method here for rest pattern
  orderPizza: (mainIngredient, ...otherIngredients) => {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};


// =================================== LOGICAL ASSIGNMENT OPERATOR ====================================
const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Pizza',
  owner: 'Giovanni Rossi',
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// Instead, we can write the following:
// ========Logical assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// to make it even better:
// ========Logical nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// ========Logical AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// we can make this better with:
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1, rest2);

// =================================== SHORT CIRCUITING (&& and ||) ====================================

console.log('-------- OR ----------');

console.log(3 || 'Barkley'); // 3 is truthy
console.log('' || 'Charles'); // '' is falsy
console.log(true || 0); // true is truthy
console.log(undefined || null); // undefined is falsy so it doesn't reach null
console.log(undefined || 0 || '' || 'Hello' || 23 || null); // 'hello' is the 1st truthy value

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2); // 10

console.log('----------AND----------');
console.log(0 && 'Charles'); // 0, since it's falsy
console.log(7 && 'Charles'); // Charles, since 7 is truthy so the last value is returned

console.log('Hello' && 23 && null && 'Charles'); // null

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'olive');
}

// simpler way
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'olive');

console.log('----------NULLISH (??) COALESING----------');

restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
// console.log(guests);

// NULLISH: null and undefined (NOT 0 or ''. Basically ?? pretends that 0 and '' are truthy.)
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//Short circuiting is an even better way to initialize values than ternary operator or if/else statements. HOWEVER, if our initial number is 0, short circuiting won't work.

// ==========================> IMPORTANT
// The OR (||) operator will return the first truthy value of all the operands, or simply the last value if all of them are falsy. On the other hand, the AND (&&) operator will return the first falsy value or the last value if all of them are truthy. And as for practical applications, we can use the OR operator to set default values, and we can use the AND operator to execute code in the second operand if the first one is true.
// ==========================> IMPORTANT

//
/*

// what we'll do:
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); // Output: ['Pizza', 'Pasta', 'Risotto', 'Gnocci']
console.log(...newMenu); // Output: Pizza Pasta Risotto Gnocci

// ========= Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// ========= Join 2 arrays (or more)
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// =======NOTE ON ITERABLES
// Iterables are arrays, strings, maps, and sets. NOT objects.
const str = 'Charles';
const letters = [...str, ' ', 'B.'];
console.log(letters);
console.log(...str);

// THIS WILL NOT WORK:
// console.log(`${...str} Barkley`); // doesn't work
// multiple values separated by comma are usually ONLY expected when we pass arguments into a function or when we build arrays.

// ======= Spread Operator with Methods
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1: "),
//   prompt('Ingredient 2: '),
//   prompt('Ingredient 3: '),
// ];

// console.log(ingredients);
// console.log(restaurant.orderPasta(...ingredients));

// ======= Spread Operator with Objects
const newRestaurant = {
  ...restaurant,
  foundedIn: 1966,
  founder: 'Barkley Zero Rings',
};
console.log('New Restaurant:', newRestaurant);

// object copy
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Krispy Kreme';
console.log('Copy name: ', restaurantCopy.name);
console.log('Original name: ', restaurant.name);

// ============================================ REST PATTERN ===================================================

// ============= 1. FOR DESTRUCTURING
// SPREAD, because on the RIGHT side of "="
const arr = [1, 2, ...[3, 4]];
console.log(arr); // [1, 2, 3, 4]

// REST, because on the LEFT side of "=" (rest = rest of the elements, i.e., should always be the last element)
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]

// ===== Combining both by using the restaurant example from above
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood); // Pizza Risotto [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

// ==== REST in Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

// ========== 2. FOR FUNCTIONS
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log('Sum is', sum);
};
add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushroom', 'pineapple', 'olive', 'lettuce'); // Output:
// mushroom
// [ 'pineapple', 'olive', 'lettuce' ]

restaurant.orderPizza('mushroom');

// ============================================ FOR-OF LOOP ===================================================
// Example from above:

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  // adding method here for spread operator
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  },

  // adding yet another method here for rest pattern
  orderPizza: (mainIngredient, ...otherIngredients) => {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// the loop here
for (const i of menu) console.log(i);

// to get items with their indexes
for (const [counter, element] of menu.entries()) {
  console.log(`${counter + 1}: ${element}`);
}

// ============================================ ENHANCED OBJECT LITERALS ===================================================

// example used:

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [`day-${2 + 2}`]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(openingHours);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  // adding method here for spread operator
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  },

  // adding yet another method here for rest pattern
  orderPizza: (mainIngredient, ...otherIngredients) => {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// ============================================ OPTIONAL CHAINING (.?)===================================================

//example used:
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[6]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// console.log(openingHours);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  // adding method here for spread operator
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  },

  // adding yet another method here for rest pattern
  orderPizza: (mainIngredient, ...otherIngredients) => {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
//normally to check whether the restaurant is open on a certain day
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours?.mon?.open);

// a more real-world example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}.`);
}

// optional chaining with methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist'); // 0 & 1 are simply arguments being passed; not related to binary 0 & 1.
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//arrays
const users = [{ name: 'Charles', email: 'charleszero@rings.com' }];

console.log(users[0]?.name ?? 'user array empty'); // Charles
console.log(users[1]?.name ?? 'user array empty'); // user array empty

// ============================================ LOOPING OBJECTS: OBJECT KEYS, VALUES, ENTRIES ===================================================

//example used:
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[6]]: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// console.log(openingHours);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  // adding method here for spread operator
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2}, and ${ing3}.`);
  },

  // adding yet another method here for rest pattern
  orderPizza: (mainIngredient, ...otherIngredients) => {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// looping over property names
const properties = Object.keys(openingHours);
console.log(properties); // [ 'thu', 'sun', 'sat' ]

let openStr = `We are open for ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}

console.log(openStr);

// property values
const values = Object.values(openingHours);
console.log(values);

// Entrie object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}.`);
}



// ============================================ CODING CHALLENGE #2 ===================================================
// Solution at: 09-Data-Structures-Operators/starter/coding-challenge-2.js

// ============================================ SETS ===================================================

//++++++++++ creating a new set

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);

console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Risotto' } => no duplicates

console.log(new Set('Charles')); // Set(7) { 'C', 'h', 'a', 'r', 'l', 'e', 's' }

//+++++++++ Size
console.log(ordersSet.size); // 3

//+++++++++ checking availability of an element
console.log(ordersSet.has('Pizza')); // true

//+++++++++ adding elements
ordersSet.add('Garlic Bread', 'Garlic Bread');
console.log(ordersSet); // Set(4) { 'Pasta', 'Pizza', 'Risotto', 'Garlic Bread' }

//+++++++++ deleting elements
ordersSet.delete('Risotto');
console.log(ordersSet); // Set(3) { 'Pasta', 'Pizza', 'Garlic Bread' }

//+++++++++ deleting everything
// ordersSet.clear();
// console.log(ordersSet); // Set(0) {}

//+++++++++ looping
for (const order of ordersSet) console.log(order);

//+++++++++++++ Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // [ 'Waiter', 'Chef', 'Manager' ]
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
); // 3

console.log(new Set('charlesbarkely').size); // 10

// ============================================ MAPS ===================================================

const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Florence, Italy');
rest.set(2, 'Lisbon, Portugal');
console.log(rest.set(2, 'Lisbon, Portugal'));

//+++++++ set chaining
rest
  .set('categories', ['Italian', 'Pizzeria', 'Veg', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open')
  .set(false, 'we are closed');
console.log(rest);
console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(1)); // Florence, Italy

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

//+++++++ checking if a map contains a certain key
console.log(rest.has('categories'));

//+++++++ deleting a key
rest.delete(2);
console.log(rest);

//+++++++ size
console.log(rest.size); // 7

//+++++++ clear all elements
// rest.clear();
// console.log(rest); // Map(0) {}

//+++++++ using arrays/objects as map keys
rest.set([1, 2], 'test');
console.log(rest, rest.size);
console.log(rest.get([1, 2])); // undefined
// so instead, we can do:
const arr = [1, 2];
rest.set(arr, 'test');
console.log(rest.get(arr)); // test

//+++++++ DOM
// rest.set(document.querySelector('h1'), 'Heading');

// ============================================ MAPS: ITERATION ===================================================

// ++++ there is another method for iterating maps other than .set

const question = new Map([
  ['question', 'what is the best prog language?'],
  [1, 'C'],
  [2, 'Python'],
  [3, 'JS'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'try again'],
]);

console.log(question);

// in our previous learnings, we had:
const openingHours = {
  mon: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
console.log(Object.entries(openingHours));

//+++++++++++++ Converting this object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//+++++++++++ MAPS ARE ITERABLE
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
// const answer = Number(prompt('Your answer')); // this doesn't work in node, browser is needed
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

//+++++++++++ Converting map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);

// ============================================ WHICH DATA STRUCTURE TO USE? ===================================================
// look at the illustration: helpful-illustrations/arrays v sets + objects v maps.png

// ============================================ CODING CHALLENGE #3 ===================================================
// solution is in: 09-Data-Structures-Operators/starter/coding-challenge-3.js

// ============================================ WORKING WITH STRINGS - PART 1 ===================================================

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3 (not a number, a string 3)
console.log('B737'[2]); // 3
console.log(airline.length); // 16, number

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8

//+++++++++ slicing
console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air

console.log(airline.slice(0, airline.indexOf(' '))); // TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal
console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function (seat) {
  // B & E are the middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log(s, 'You got the middle seat');
  else console.log(s, 'you got lucky! not a middle seat');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// ============================================ WORKING WITH STRINGS - PART 2 ===================================================
const airline = 'TAP Air Portugal';
console.log(airline.toLowerCase()); // tap air portugal
console.log(airline.toUpperCase()); // TAP AIR PORTUGAL

// fix capitalization in name
const passenger = 'cHarLes';
const passengerUpper = passenger.toUpperCase();
const passengerCorrect =
  passengerUpper[0] + passengerUpper.slice(1).toLowerCase();
console.log(passengerCorrect);

// comparing emails
const email = 'charleszero@rings.com';
const loginEmail = ' Charleszero@Rings.Com \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmailWithoutWhitespace = lowerEmail.trim();
// console.log(trimmedEmailWithoutWhitespace); // charleszero@rings.com

// alternatively, we can do it all in 1 step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//++++++++ Replace parts of strings
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(announcement.replaceAll('door', 'gate'));

// booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); //false

console.log(plane.startsWith('Air')); // true
console.log(plane.startsWith('A')); // true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('part of the new airbus family');
}

// practice
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('Not allowed');
  } else {
    console.log('welcome!');
  }
};

checkBaggage('I got some books and a butter knife, no biggie'); // Not allowed
checkBaggage('I have the bomb that will destroy this plane'); // welcome!

// ============================================ WORKING WITH STRINGS - PART 3 ===================================================

//++++++++++ split and join
console.log('a+very+nice+string'.split('+')); // [ 'a', 'very', 'nice', 'string' ]

console.log('Charles ZeroRingsBarkley'.split(' ')); // [ 'Charles', 'ZeroRingsBarkley' ]

const [firstName, lastName] = 'Charles ZeroRingsBarkley'.split(' ');

const newName = ['Sir', firstName, lastName.toUpperCase()].join(' ');
console.log(newName); // Sir Charles ZERORINGSBARKLEY

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const namaye of names) {
    // namesUpper.push(namaye[0].toUpperCase() + namaye.slice(1)); OR
    namesUpper.push(namaye.replace(namaye[0], namaye[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');

//+++++++ Padding a string
const message = 'Go to gate 23!';
console.log(message.padStart(25, '+')); // +++++++++++Go to gate 23!
console.log(message.padEnd(25, '+')); // Go to gate 23!+++++++++++
console.log(message.padStart(20, '-').padEnd(26, '==')); // ------Go to gate 23!======

// real world example
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4644574335673434));
console.log(maskCreditCard('3457123466453434342'));

//++++++++ repeat method
const message2 = 'Bad weather... All departures delayed... ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'🛩️'.repeat(n)}`);
};

planesInLine(5);

// ============================================ CODING CHALLENGE #4 ===================================================
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  // console.log(`text:\n${text}`);
  const rows = text.split('\n');
  // console.log(`rows:\n${rows}`);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    // console.log('first:', first);
    // console.log('second:', second);
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

// ============================================ STRING METHODS EXTENDED ===================================================
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(44, '.');
  console.log(output);
}

*/

// ============================================ DATA STRUCTURES: FIN ===================================================
