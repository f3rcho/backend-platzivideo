module.exports = {
    api: {
        dev: process.env.NODE_ENV !== 'production',
        port: process.env.PORT || 3000,
        cors: process.env.CORS,
        dbUser: process.env.dbUser || 'db_platziVideos',
        dbPassword: process.env.dbPassword || 'hMyIfM631oQMHIT4',
        dbHost: process.env.dbHost || 'cluster0-icc7n.mongodb.net',
        dbName: process.env.dbName || 'platziVideos',
    }
};