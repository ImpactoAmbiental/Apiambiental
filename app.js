const express = require('express');
const dbconnect = require('./config');
const cors = require('cors');
const ImpactosEcologicosController = require('./controllers/ImpactosEcologicoController');
const UserController = require('./controllers/UserController');
const app = express();

// Configuración de CORS para permitir todas las solicitudes
app.use(cors({
    origin: '*', // Permitir cualquier origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
}));

app.use(express.json());
app.use(UserController);
app.use(ImpactosEcologicosController);

app.listen(3001, () => {
    console.log("El servidor está en el puerto 3001");
});

// Conectar a la base de datos
dbconnect();
