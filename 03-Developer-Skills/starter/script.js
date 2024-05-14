// Remember, we're gonna use strict mode in all scripts now!
"use strict";

/*
// ============================================ DEBUGGING ===================================================

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "cels",
    value: prompt("Degrees celsius: "),
  };

  console.table(measurement); // gives a nice table with values

  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
*/

// ======================= CODING EXERCISE: LOOKING AT STACKOVERFLOW, DEBUGGING ==============================

//steps
//1. make the function format
//2. need to make sure element 1 of the array goes to day 1, element 2 to day 2, etc... until it ends.
//3. how? need to create the function in a way that the same console log print statement applies to any array length and I won't have to repeat it...
//3. creates the `` console log statement accordingly

const printForecast = function (arr) {
  let printval = "";
  for (let i = 0; i < arr.length; i += 1) {
    printval += `...${arr[i]} degree celsius in ${i + 1} day${
      i + 1 > 1 ? "s" : ""
    }${i === arr.length - 1 ? "..." : ""}`;
  }
  return printval;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
