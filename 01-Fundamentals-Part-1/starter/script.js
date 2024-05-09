/*
let js = 'amazing';

console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Kylian";
console.log(firstName);


let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');
console.log(typeof Jonas);

console gives:
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

//Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); // why does this work? how does js know to do - first before > ?
// This is because in the js operator precedence, ' > ' is below '-'.
// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

let x, y;

x = y = 25 - 10 - 5; // x = y = 10
console.log(x, y); // 10 10

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge); // 46 19 32.5


const firstName = 'Charles';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const charles = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '.'; // ineffective
console.log(charles);

// Template Literals
const charlesNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}.`;
// this is much easier, `` are backticks
console.log(charlesNew);

console.log(`This is just a regular string in backticks`);

console.log('String with \n\
multiple \n\
lines.')

console.log(`String with
multiple
lines but with backticks.`);

// if / else control structure
const age = 15;

if (age >= 18) {
    console.log(`Sarah can start driving license 🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young, ${yearsLeft} years left.`)
}

const bornYear = 1991;

let century;

if (bornYear < 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century); // 20

// Type Conversion and Coercion
// Type Conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear); // output: 1991 '1991' | we can convert strings to numbers this way
console.log(Number(inputYear) + 18); // 2009

console.log(Number('Charles')); // outputs NaN

console.log(String(23), 23);
// Number to string | Outputs 23 23 (the second 23 is in purple, meaning it's a number)

// Type Coercion
console.log('I am ' + 23 + ' years old') // coercion has been triggerd to make a string
console.log('23' - '10' - 3); // outputs 10 | Strings got converted to numbers
console.log('23' + '10' + 3); // outputs 23103 | 3 got converted to a string
console.log('23' * '2'); // outputs 46 | these got converted to strings

let n = '1' + 1;
n = n - 1;
console.log(n); // outputs 10

// Truthy and Falsy Values
// 5 falsy values: 0, '', undefined, null, NaN

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean('Charles')); // true
console.log(Boolean({})); // true
console.log(Boolean('')); // false

const money = 0;
if (money) {
    console.log("Don't spend it all!");
} else {
    console.log('You should get a job');
}
// Output: You should get a job | 0 triggers a falsy value, so if(money) becomes false so the else statement gets done.

let height;
if (height) {
    console.log('Yay! Height is defined!');
} else {
    console.log('Height is undefined.');
}
// Output: Height is undefined. | This is because height is undefined, so if(height) becomes false.

// -------- EQUALITY OPERATORS -----------//
const age = '18';
if (age === 18) console.log(`You just became an adult.`);
if (age == 18) console.log(`You just became an adult (with a loose operator)`);
// IMPORTANT: `==` does type coercion, meaning ‘18’ and 18 are loosely equal.
// `===` does NOT do type coercion; it becomes true only if the left and right are exactly the same.

// Setting a prompt popup
const favorite = prompt("What's your favorite number?"); // let's assume I entered 23
console.log(favorite); // outputs 23
console.log(typeof favorite); // outputs string (yup, not a number)

if (favorite == 23) {
    console.log(`Cool! 23 is an amazing number!`);
}

// It's better to convert the string to a Number. Let's not use ==.
const favoUrite = Number(prompt("What's your favorite number?")); // let's assume I entered 23
console.log(favoUrite); // outputs 23 (not a string but a number this time)

if (favoUrite === 23) { // === this time
    console.log(`Cool! 23 is an amazing number!`);
}

// for not equal operators
if (favoUrite !== 23) console.log('Why not 23?'); // !== is the strict version.
*/

// --------------------------------- LOGICAL OPERATORS ------------------------------------//
const hasDriversLicense = true; //A
const hasGoodVision = false; //B
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const isTired = true; //C
console.log(hasDriversLicense || hasGoodVision || isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log(`Sarah is able to drive!`);
} else {
    console.log(`Someone else should drive!`);
}