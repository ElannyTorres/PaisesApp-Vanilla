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
      <button class="moreInfoBtn${paisID.toLowerCase()}">Ver más</button>
    </div>
    <div class="modalOverlay">
      <div class="modalContainer" id=${paisID.toLowerCase()}>
        <h3>${pais.name.common} se encuentra en:</h3>
        <p>${pais.continents}</p>
        <button class="close-btn">X</button>
      </div>
    </div>
  `;
  container.appendChild(paisInfo);

  const moreInfoBtn = document.querySelector(
    `.moreInfoBtn${pais.fifa.toLowerCase()}`
  );
  console.log(moreInfoBtn);
  moreInfoBtn.addEventListener('click', () => {
    console.log('más info del país: ' + pais.name.common);
  });
};

export default createPaisCard;
