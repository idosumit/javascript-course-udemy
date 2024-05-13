'use strict';

/*
// ------------------------------------- STRICT MODE --------------------------------------- //
'use strict'; // to write more strict code and avoid errors

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // Experimented with wrong spelling of hasDriversLicense for demo
if (hasDriversLicense) console.log('I can drive.');

// const interface = 'Audio'; // it's a strict mode reserved word, so there will be an error
// const private = 534; // similar error


// ------------------------------------- FUNCTIONS --------------------------------------- //
function logger() { // abstracting the function
    console.log('My name is Charles');
}

logger(); //calling / running / invoking the function

//another example
function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
    // Why return?
    // return in a function provides a mechanism for outputting a value and terminating the function's execution, thereby enabling modular, manageable, and reusable code design.
}

const appleJuice = fruitProcessor(7, 19);
console.log(appleJuice);

//or do it directly:
console.log(fruitProcessor(7, 19));

// --------------------------------- FUNCTION DECLARATIONS V EXPRESSIONS ----------------------------------- //
// function declaration:
function calcAge1(birthYear) {
    return 2037 - birthYear;
}

const age1 = calcAge1(1991);
console.log(age1);

// function expression:
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);

// Main difference: function declaration can be called before defining that function (i.e., hoisting possible)
// Main difference: function expression cannot be called before defining it (JUST LIKE IN C) (can't be hoisted)

// --------------------------------- ARROW FUNCTIONS ----------------------------------- //
// Arrow function
const calcAge3 = birthYear => 2037 - birthYear; // RETURN HAPPENS IMPLICITLY; we don't need to return the value since it's a one-liner
const age3 = calcAge3(1991);
console.log(age3); // 46

// More complicated arrow function with new parameters (birthYear, firstName):
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years.`;
}

console.log(yearsUntilRetirement(1991, 'Charles'));

// --------------------------------- FUNCTIONS CALLING OTHER FUNCTIONS ----------------------------------- //
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePiece = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePiece} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));


// --------------------------------- FUNCTION REVIEW ----------------------------------- //
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    // return `${firstName} retires in ${retirement} years.`;
    if (retirement > 0) {
        return retirement;
    } else {
        return -1; // -1 for vibes
    }
}

console.log(yearsUntilRetirement(1991, 'Charles'));
console.log(yearsUntilRetirement(1985, 'Ernest'));

// --------------------------------- CODING EXERCISE 5: FUNCTIONS ----------------------------------- //
// My solution: 02-Fundamentals-Part-2/codingexercise5 (functions).js

// --------------------------------- ARRAYS - FIRST DATA STRUCTURES ----------------------------------- //

// Instead of:
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//Rather do:
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[2]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

// array with all kinds of info
const firstName = 'Charles';
const charles = [firstName, 'Barkley', 2037 - 1991, 'teacher', friends];
console.log(charles);

// Mini-exercise:
const calcAge = function (birthYear) {
    return 2037 - birthYear;
}
const 年 = [1990, 1967, 2002, 2010, 2018];

const ages = [calcAge(年[0]), calcAge(年[1]), calcAge(年[年.length - 1])];
console.log(ages);

// --------------------------------- METHODS: BASIC ARRAY OPERATIONS ----------------------------------- //
const friends = ['Michael', 'Steven', 'Peter'];

// adding element to the array's tail: .push()
const newLength = friends.push('Jay');
console.log(friends); // Output: (4) ['Michael', 'Steven', 'Peter', 'Jay']
console.log(newLength); // push by itself shows the length of the array in the console

// adding elements to the array's beginning: .unshift()
friends.unshift('John');
console.log(friends); // Output: (5) ['John', 'Michael', 'Steven', 'Peter', 'Jay']


// removing elements .pop()
const popped = friends.pop(); // removes the last element
console.log(popped); // pop by itself shows the element that has been removed (NOT the length)
console.log(friends); // Output: (4) ['John', 'Michael', 'Steven', 'Peter']

//removing the first element: .shift()
friends.shift();
console.log(friends); // Output: (3) ['Michael', 'Steven', 'Peter']

// to know the index of a particular element in an array: .indexof()
console.log(friends.indexOf('Steven')); // Output: 1
console.log(friends.indexOf('YoMama')); // Output: -1 (it doesn't exist in that array)

// to know just whether the element is in the array or not: .includes()
console.log(friends.includes('Steven')); // Output: true
console.log(friends.includes('YoMama')); // Output: false
//.includes does NOT do type coercion. Only strict equality. So a "23" and 23 will give us 'false'.

// Commonly used case:

console.log(friends); // Output: (3) ['Michael', 'Steven', 'Peter']
const test_name = 'Steven';
if (friends.includes(test_name)) {
    console.log(`You have a friend called ${test_name}.`)
}

// --------------------------------- CODING EXERCISE 6: ARRAYS ----------------------------------- //
// My solution: 02-Fundamentals-Part-2/codingexercise6 (arrays).js


// --------------------------------- OBJECTS: FOUNDATIONAL INTRODUCTION ----------------------------------- //
// An array looks something like:
const charlesArray = [
    'Charles',
    'Barkley',
    2037 - 1991,
    'basketball player',
    ['Ernie', 'Kenny the Jet', 'Shaq']
];

// Array has a limitation of only being able to define/reference its elements with the order numbers.
// That's where object comes into play.

// An object in this case would be like:
const charlesObject = { // this curly bracket is a different kind compared to a normal one
    firstName: 'Charles',
    lastName: 'Barkley',
    age: 2037 - 1991,
    job: 'basketball player',
    friends: ['Ernie', 'Kenny the Jet', 'Shaq']
};


// Objects have properties, just like how arrays have elements.
// Big difference between `objects` and `arrays`:
// -------> Objects: Order does NOT matter.
// -------> Arrays: Order is quintessential.

// --------------------------------- DOT v BRACKET NOTATION ----------------------------------- //
const charlesObject = {
    firstName: 'Charles',
    lastName: 'Barkley',
    age: 2037 - 1991,
    job: 'basketball player',
    friends: ['Ernie', 'Kenny the Jet', 'Shaq']
};

console.log(charlesObject);

// dot notation
console.log(charlesObject.lastName);
console.log(charlesObject['lastName']);

// bracket notation
const nameKey = 'Name';
console.log(charlesObject['first' + nameKey]);
console.log(charlesObject['last' + nameKey]);

// another example when we don't know whether to use dot or bracket

const interestedIn = prompt('What do you want to know about Charles? Choose between firstName, lastName, age, job, and friends.');
console.log(charlesObject[interestedIn]); // cannot use dot notation here

if (charlesObject[interestedIn]) {
    console.log(charlesObject[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends.')
}

// using both dot and bracket
charlesObject.location = 'USA';
charlesObject['twitter'] = 'krispykreme';
console.log(charlesObject);

// --------------------------------- DOT v BRACKET NOTATION CHALLENGE ----------------------------------- //
// To produce: "Charles has 3 friends, and his best friend is called Ernie."
// TASK: Use both dot and bracket notations.

const charlesZeroRings = {
    name: 'Charles',
    friends: ['Ernie', 'Kenny the Jet', 'Shaq']
};

console.log(`${charlesZeroRings.name} has ${charlesZeroRings.friends.length} friends, and his best friend is called ${charlesZeroRings.friends[0]}.`)


// --------------------------------- OBJECT METHODS ----------------------------------- //
const charlesObject = {
    firstName: 'Charles',
    lastName: 'Barkley',
    birthYear: 1991,
    job: 'basketball player',
    friends: ['Ernie', 'Kenny the Jet', 'Shaq'],
    hasDriversLicense: true,

    calcAge: function (birthYear) {
        return 2037 - birthYear; // a function-like thing inside the object is called a method
    }
};

console.log(charlesObject.calcAge(1991));
// OR
console.log(charlesObject['calcAge'](1991));

// BETTER WAY TO DO THIS:
const charlesZeroRings = {
    firstName: 'Charles',
    lastName: 'Barkley',
    birthYear: 1991,
    job: 'basketball player',
    friends: ['Ernie', 'Kenny the Jet', 'Shaq'],
    hasDriversLicense: true,

    calcAgee: function () {
        console.log(this);
        return 2037 - this.birthYear;
    }
};

console.log(charlesZeroRings.calcAgee());

// OUTPUT:
// {firstName: 'Charles', lastName: 'Barkley', birthYear: 1991, job: 'basketball player', friends: Array(3), …}
// 46

// YET ANOTHER VARIATION:
const charlesZeroRings = {
    firstName: 'Charles',
    lastName: 'Barkley',
    birthYear: 1991,
    job: 'basketball player',
    friends: ['Ernie', 'Kenny the Jet', 'Shaq'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        // console.log(this);
        return this.age;
    }
};
console.log(charlesZeroRings.calcAge()); // this needs to be done once otherwise the below logs won't work

console.log(charlesZeroRings.age);

// --------------------------------- OBJECT METHOD CHALLENGE ----------------------------------- //
// Challenge:
// "Charles is a 46-year old basketball player, and he has a driver's license."
// Have to write a string 'getSummary" and make it either "a driver's license" or "no driver's license."

const charlesZeroRings = {
    firstName: 'Charles',
    lastName: 'Barkley',
    birthYear: 1991,
    job: 'basketball player',
    friends: ['Ernie', 'Kenny the Jet', 'Shaq'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
    }
};

console.log(charlesZeroRings.getSummary());

// --------------------------------- CODING EXERCISE 7 ----------------------------------- //
// My solution: 02-Fundamentals-Part-2/codingexercise7 (objects).js

// ------------------------- THE FOR LOOP: LOOPING ARRAYS, BREAKING, CONTINUING --------------------------- //
for (let i = 0; i < 2; i++) {
    console.log(`Lifting weights repetition ${i}`);
}

const charlesZeroRings = [
    'Charles',
    'Barkley',
    2037 - 1991,
    'basketball player',
    ['Ernie', 'Kenny the Jet', 'Shaq'],
    true
];

const types = [];

for (let i = 0; i < charlesZeroRings.length; i++) {
    console.log(charlesZeroRings[i], typeof charlesZeroRings[i]);

    // types[i] = typeof charlesZeroRings[i];

    // Another way
    types.push(typeof charlesZeroRings[i]);
}

console.log(types); // Output: ['string', 'string', 'number', 'string', 'object', 'boolean']


// One more example
const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    // Let's assume 2024 is the current year
    ages.push(2024 - years[i]);
}
console.log(ages); // Output: (4) [33, 17, 55, 4]
*/


// ------------------------- THE FOR LOOP: BREAKING, CONTINUING --------------------------- //
const charlesZeroRings = [
    'Charles',
    'Barkley',
    2037 - 1991,
    'basketball player',
    ['Ernie', 'Kenny the Jet', 'Shaq'],
    true
];

console.log('--------ONLY STRINGS--------')
for (let i = 0; i < charlesZeroRings.length; i++) {
    if (typeof charlesZeroRings[i] !== 'string') continue;
    // meaning it'll skip the ith element if it's not a string; if the condition is true, the skipping happens.
    // Can understand it more has a "SKIP". "continue" is a very bad choice of word for this lol (my opinion)

    console.log(charlesZeroRings[i], typeof charlesZeroRings[i]);
    // Output:
    // --------ONLY STRINGS--------
    // Charles string
    // Barkley string
    // basketball player string
}

console.log('--------BREAK WITH NUMBER--------')
for (let i = 0; i < charlesZeroRings.length; i++) {
    if (typeof charlesZeroRings[i] === 'number') break;
    // meaning whenever the condition is satisfied, the whole loop is immediately terminated.

    console.log(charlesZeroRings[i], typeof charlesZeroRings[i]);
    // Output:
    // --------BREAK WITH NUMBER--------
    // Charles string
    // Barkley string
}