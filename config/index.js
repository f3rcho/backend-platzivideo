require('dotenv').config();

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    cors: process.env.CORS,
    dbUser: process.env.dbUser,
    dbPassword: process.env.dbPassword,
    dbHost: process.env.dbHost,
    dbName: process.env.dbName,
};

module.exports = { config };