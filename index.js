const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const config = require('./config/index');
const moviesApi = require('./routes/movies');

const { logErrors, errorHandler, wrapErrors } = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');
//adding some security
// default options
app.use(helmet());
// custom options
app.use(helmet.hidePoweredBy());
app.use(helmet.permittedCrossDomainPolicies());

// parser application/x-www.form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.json());

// Enable All Cors requests
app.use(cors());

// ROUTES
moviesApi(app);

// CATCH 404
app.use(notFoundHandler);

// ERROR MIDDLEWARES
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);



app.listen(config.api.port, function() {
     const debug = require('debug')('app:server');
    // eslint-disable-next-line no-console
    debug(`App listening on http://localhost:${config.api.port}`);
});
