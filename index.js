const net = require('net');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

// Ruta para servir la interfaz web estática
app.use(express.static('public'));

// Manejador de conexiones TCP
server.on('connection', (socket) => {
  console.log('Cliente TCP conectado');

  // Manejar datos entrantes
  socket.on('data', (data) => {
    const rawData = data.toString('utf-8');
    console.log('Datos crudos recibidos:', rawData);
    
    // Puedes emitir los datos a través de WebSockets, por ejemplo
    io.emit('datos', rawData);
  });

  // Manejar la desconexión del cliente
  socket.on('end', () => {
    console.log('Cliente TCP desconectado');
  });

  // Manejar errores de conexión
  socket.on('error', (err) => {
    console.error('Error de conexión TCP:', err.message);
  });
});

// Configuración del servidor HTTP
const portHTTP = 3000;
server.listen(portHTTP, () => {
  console.log(`Servidor HTTP escuchando en el puerto ${portHTTP}`);
});

// Configuración de Socket.IO para la comunicación en tiempo real
const io = require('socket.io')(server);

// Configuración del servidor TCP
const portTCP = 3001;
net.createServer((socket) => {
  server.emit('connection', socket); // Emitir el evento de conexión al servidor HTTP
}).listen(portTCP, () => {
  console.log(`Servidor TCP escuchando en el puerto ${portTCP}`);
});