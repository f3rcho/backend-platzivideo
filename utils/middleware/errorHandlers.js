const boom = require('@hapi/boom')
const config =  require('../../config/index');

function withErrorStack(error, stack) {
    if(config.api.dev) {
        return { ...error, stack };
    }
    return error;
};

function logErrors(err, req, res, next) {
    console.log(err); // eslint-disable-line
    next(err);
}

function wrapErrors(err, req, res, next) {
    if(!err.isBoom) {
        next(boom.badImplementation(err));
    }
    next(err);
};

function errorHandler(err, req, res, next) { // eslint-disable-line
const { output: { statuCode, payload } } = err;

    res.status(statuCode);
    res.json(withErrorStack(payload, err.stack));
}

module.exports = {
    logErrors,
    wrapErrors,
    errorHandler,
};