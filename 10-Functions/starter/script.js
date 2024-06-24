'use strict';

// ========================================== DEFAULT PARAMETERS =========================================
const bookings = [];

const createBooking = function (flightNum, numPassengers = 1, price = 199) {
  //   // old way (ES5) of setting default parameters
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking('LH123');
createBooking('LH123', undefined, 100); // skipping a default parameter
