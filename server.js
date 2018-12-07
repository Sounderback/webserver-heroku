var express = require('express');
var app = express();
var hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('index', {
        nombre: 'Raul'
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

// app.get('/', (req, res) => {
//     //res.send('Hola Mundo');
//     let salida = {
//         nombre: 'Raul',
//         edad: 28,
//         url: req.url
//     };
//     res.send(salida);
// })

// app.get('/data', (req, res) => {
//     res.send('Hola Mundo');
// })


app.listen(port, () => {
    console.log(`Escuchando peticiones del puerto ${port}`);
});