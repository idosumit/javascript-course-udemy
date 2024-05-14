// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// ============================================ DEBUGGING ====================================================

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
