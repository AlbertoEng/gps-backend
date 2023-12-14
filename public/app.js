const socket = io();

// Escuchar eventos de datos desde el servidor
socket.on('datos', (rawData) => {
  const datosList = document.getElementById('datos-list');
  const nuevoItem = document.createElement('li');
  nuevoItem.textContent = rawData;
  datosList.appendChild(nuevoItem);
});
