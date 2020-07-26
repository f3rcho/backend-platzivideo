const express = require('express');
const app = express();

const config = require('./config/index');
const moviesApi = require('./routes/movies');

const { logErrors, errorHandler } = require('./utils/middleware/errorHandlers');

//body parser
app.use(express.json())

moviesApi(app);
app.use(logErrors);
app.use(errorHandler);



app.listen(config.api.port, function() {
    // eslint-disable-next-line no-console
    console.log(`App listening on http://localhost:${config.api.port}`);
});
