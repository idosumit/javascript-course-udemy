// ------------------------------------- STRICT MODE --------------------------------------- //
'use strict'; // to write more strict code and avoid errors

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; // Experimented with wrong spelling of hasDriversLicense for demo
if (hasDriversLicense) console.log('I can drive.');

// const interface = 'Audio'; // it's a strict mode reserved word, so there will be an error
// const private = 534; // similar error