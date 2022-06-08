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

const goUpBtn = document.getElementById('goUpBtn');
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    goUpBtn.style.display = 'block';
  } else {
    goUpBtn.style.display = 'none';
  }
}
// When the user clicks on the button, scroll to the top of the document
goUpBtn.onclick = function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
