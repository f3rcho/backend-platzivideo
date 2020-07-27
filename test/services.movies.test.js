const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStud } = require('../utils/mocks/mongoLib');
const { moviesMock } = require('../utils/mocks/movies');

describe('Services - Movies', function() {
    const MoviesServices = proxyquire('../services/movies', {
        '../lib/mongo': MongoLibMock
    });
    const moviesServices = new MoviesServices();

    describe('when get movies method is called', async function() {
        it('should call the getall MongoLib method', async function() {
            await moviesServices.getMovies({});
            assert.strictEqual(getAllStud.called, true);
        });

        it('should return an array of movies', async function() {
            const result = await moviesServices.getMovies({});
            const expected = moviesMock;
            assert.deepEqual(result, expected);
        });
    });
});