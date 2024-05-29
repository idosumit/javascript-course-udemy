'use strict';
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

*/

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
};

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
