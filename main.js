import createPaisCard from './components/Card/card.js';

const spinner = document.querySelector('#spinner');
const paisesContainer = document.querySelector('.paisesContainer');

/* API RESTCOUNTRY */
const Pais_URL = 'https://restcountries.com/v3.1/lang/spa';

fetch(Pais_URL)
  .then((res) => res.json())
  .then((resJson) => {
    const newResJson = resJson.splice(0, 12);
    for (let pais of newResJson) {
      createPaisCard(pais, paisesContainer);
      /* Sipnner */
      spinner.style.display = 'none';
    }
  });
