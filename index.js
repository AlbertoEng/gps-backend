const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Configuración del motor de plantillas Pug
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Ruta de la página principal
app.get('/', (req, res) => {
  res.render('index', { title: 'Bienvenido a mi sitio' });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
