export const createModal = (pais, paisID, container) => {
  const modal = document.createElement('div');
  modal.setAttribute('class', 'modalContainer');
  modal.innerHTML = `
    <div id=${paisID.toLowerCase()}>
      <h3>${pais.name.common} se encuentra en:</h3>
      <p>${pais.continents}</p>
      <button class="close-btn">Cerrar</button>
    </div>
  `;
  container.appendChild(modal);
};
