// Coding challenge #3

'use strict';

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const calcAverageHumanAge = data =>
  data
    .map(dogAgeElement =>
      dogAgeElement <= 2 ? 2 * dogAgeElement : 16 + dogAgeElement * 4
    )
    .filter(dogAgeElement => dogAgeElement >= 18)
    .reduce((cumulativeAgeValue, dogAgeElement, index, array) => {
      // console.log(`Cumulative age value: ${cumulativeAgeValue}, Array: ${array}`);
      return cumulativeAgeValue + dogAgeElement / array.length;
    }, 0);

// OR:
// const calcAverageHumanAge = ages =>
//       ages
//         .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//         .filter(age => age >= 18)
//         .reduce(
//           (cumulativeAgeValue, age, index, array) =>
//             cumulativeAgeValue + age / array.length,
//           0
//         );

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));
