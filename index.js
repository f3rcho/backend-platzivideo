const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function(req, res) {
    res.send('Hello world');
});

app.get('/json', function(req, res){
    res.json({Hello: 'This is a json'});
});

app.get('/:year', function(req, res){
    const year = parseInt(req.params.year)
    const isBisiesto = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
    if (isBisiesto) {
        res.send(`${year} es bisiesto`);
    } else {
        res.send(`${year} no es bisiesto`);
    };
});

app.listen(config.port, function() {
    // eslint-disable-next-line no-console
    console.log(`App listening on http://localhost:${config.port}`);
});
