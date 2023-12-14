const net = require('net');

const server = net.createServer((socket) => {
  console.log('Cliente conectado');

  // Manejar datos entrantes
  socket.on('data', (data) => {
    const rawData = data.toString('utf-8'); // Convertir los datos a una cadena UTF-8
    console.log('Datos crudos recibidos:', rawData);
    // Aquí puedes procesar o analizar los datos según tus necesidades
  });

  // Manejar la desconexión del cliente
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });

  // Manejar errores de conexión
  socket.on('error', (err) => {
    console.error('Error de conexión:', err.message);
  });
});

const port = 3001; // Puedes cambiar el puerto según tus necesidades

server.listen(port, () => {
  console.log(`Servidor TCP escuchando en el puerto ${port}`);
});