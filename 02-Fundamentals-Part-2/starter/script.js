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

*/

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