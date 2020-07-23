const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies');

moviesApi(app);


app.listen(config.port, function() {
    // eslint-disable-next-line no-console
    console.log(`App listening on http://localhost:${config.port}`);
});
