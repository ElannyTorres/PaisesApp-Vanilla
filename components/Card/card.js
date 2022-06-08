import { createModal } from '../Modal/modal.js';

function separator(numb) {
  var str = numb.toString().split('.');
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return str.join('.');
}

const createPaisCard = (pais, container) => {
  const paisInfo = document.createElement('div');
  const paisID = pais.fifa || '';
  paisInfo.innerHTML = `
    <div class="paisContainer">
      <img class="flags" src=${pais.flags.png} alt="" />
      <h3>${pais.name.common}</h3>
      <p><strong>Capital:</strong> ${pais.capital}</p>
      <p><strong>Population:</strong> ${separator(pais.population)}</p>
      <button class="moreInfoBtn${paisID.toLowerCase()}">More Info</button>
    </div>
    <div class="modalOverlay modalOverlay${paisID.toLowerCase()}"></div>
  `;
  container.appendChild(paisInfo);

  const moreInfoBtn = document.querySelector(
    `.moreInfoBtn${pais.fifa.toLowerCase()}`
  );
  const modalOverlay = document.querySelector(
    `.modalOverlay${pais.fifa.toLowerCase()}`
  );
  moreInfoBtn.addEventListener('click', () => {
    console.log('más info del país: ' + pais.name.common);
    createModal(pais, paisID, modalOverlay);
    modalOverlay.classList.add('open-modal');
    const cerrar = document.querySelector('.close-btn');
    console.log(cerrar);
    cerrar.addEventListener('click', () => {
      console.log('cerrando');
      modalOverlay.classList.remove('open-modal');
      modalOverlay.removeChild(modalOverlay.firstChild);
    });
  });
};

export default createPaisCard;
