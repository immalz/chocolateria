const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');


// iniciar aplicacion
const app = express();


// Configuraciones
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',

}));
app.set('view engine', '.hbs');

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Variables globales


// Rutas
app.use(require('./routes/Inicio'));
app.use(require('./routes/Catalogo'));
app.use(require('./routes/Servicios'));
app.use(require('./routes/Donde-comprar'));
app.use(require('./routes/Preguntas-frecuentes'));
app.use(require('./routes/Contacto'));

// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;