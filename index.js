const express = require('express');
const app = express();

const config = require('./config/index');
const moviesApi = require('./routes/movies');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

//body parser
app.use(express.json())

// ROUTES
moviesApi(app);

// CATCH 404
app.use(notFoundHandler);

// ERROR MIDDLEWARES
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);



app.listen(config.api.port, function() {
    // eslint-disable-next-line no-console
    console.log(`App listening on http://localhost:${config.api.port}`);
});
