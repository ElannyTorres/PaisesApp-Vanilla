import createPaisCard from './components/Card/card.js';

/* API RESTCOUNTRY */
const paisesContainer = document.querySelector('.paisesContainer');

const Pais_URL = 'https://restcountries.com/v3.1/lang/spa';

fetch(Pais_URL)
  .then((res) => res.json())
  .then((resJson) => {
    const newResJson = resJson.splice(0, 12);
    for (let pais of newResJson) {
      createPaisCard(pais, paisesContainer);
    }
  });
