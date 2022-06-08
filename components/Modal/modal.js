export const createModal = (pais, paisID, container) => {
  const modal = document.createElement('div');
  modal.innerHTML = `
      <div class="modalContainer" id=${paisID.toLowerCase()}>
        <h3>${pais.name.common} se encuentra en:</h3>
        <p>${pais.continents}</p>
        <button class="close-btn">X</button>
      </div>
  `;
  container.appendChild(modal);
};
