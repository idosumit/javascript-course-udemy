'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
{
  /*
The base URL of the API used throughout this section has changed

It's not a big deal, it's really just one small change. Instead of:

https://restcountries.eu/rest/v2/

It's now:

https://countries-api-836d.onrender.com/countries/
*/
}

/*

// ============================================ MAKING OUR FIRST API CALL ============================================

//++++++++ XML HTTP request (old school way)
const getCountryData = country => {
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
  <article class="country">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('portugal');
getCountryData('spain');

*/

// ============================================ CALLBACK HELL ============================================

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${data.flags.svg}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M</p>
            <p class="country__row"><span>🗣️</span>${
              Object.values(data.languages)[0]
            }</p>
            <p class="country__row"><span>💰</span>${
              Object.values(data.currencies)[0].name
            }</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*

const getCountryAndNeighbour = country => {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    `https://restcountries.com/v3.1/name/${country}?fullText=true`
  );
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // rendering country 1
    renderCountry(data);

    // getting the neighbour country:
    const neighbour = data.borders?.[0];
    if (!neighbour) return;

    // AJAX call for the neighbouring country
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('portugal');

// But what if we needed the neighbour of the neighbour of the neighbour and so on? We would have to do asynchronous calls inside asynchronous calls inside asynchronous calls, and this is what we call callback hell. AJAX calls inside AJAX calls inside AJAX calls, and this is a real problem in JavaScript. It's a problem because it makes our code really hard to read and to maintain. And this is why we have promises and async/await. Will study this plus promises soon.

// ============================================ PROMISES AND THE FETCH API ============================================

// ++++++++++++++++++++++++++++ CONSUMING PROMISES
// consuming promises returned by the fetch function, basically

const request = fetch(
  'https://restcountries.com/v3.1/name/portugal?fullText=true'
);
console.log(request); // Promise {<pending>}

const getCountryData = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`) // this returns a promise
    .then(response => {
      // handle the promise with then method
      console.log(response);
      return response.json(); // this returns YET another promise
    })
    .then(data => {
      // another then method to handle the promise returned by the json method
      console.log(data);
      renderCountry(data[0]); // this 0 is because the data we need is in the first position of the array (see console log for more info)
    });
};

getCountryData('portugal');

//+++++ Simplyfying it:

const getCountryDataSimplified = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`).then(
    response => response.json().then(data => renderCountry(data[0]))
  );
};

getCountryDataSimplified('burkina faso');

*/

// ++++++++++++++++++++++++++++ CHAINING PROMISES TO A NEW LEVEL

// const getCountryData = country => {
//   // country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders[0];

//       if (!neighbour) return;

//       // country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`); // the value returned here is the fulfilled value of the promise
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
// };

// // getCountryData('burkina faso');

// ++++++++++++++++++++++++++++ HANDLING PROMISE REJECTIONS

const renderError = msg => {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getCountryData = country => {
  // country 1
  fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) return;

      // country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`); // the value returned here is the fulfilled value of the promise
    })
    .then(response => response.json())
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} ‼️ error!`);
      renderError(`Something went wrong ⛔️ ${err.message}. Try again`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', () => {
  getCountryData('azerbaijan');
});
