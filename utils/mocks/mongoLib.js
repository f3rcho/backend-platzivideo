// stud. is an implementation of an interface that can serve data or answers.
const sinon = require('sinon');

const { moviesMock, filteredMoviesMock } =  require('./movies');

// creation stud
const getAllStud = sinon.stub();
getAllStud.withArgs('movies').resolves(moviesMock);

const tagQuery = { tags: { $in: ['drama']}}
getAllStud.withArgs('movies', tagQuery).resolves(filteredMoviesMock('drama'));

const createStud = sinon.stub().resolves(moviesMock[0].id);

class MongoLibMock {
    getAll(collection, query) {
        return getAllStud(collection, query);
    };
    create(collection, data) {
        return createStud(collection, data);
    };
}

module.exports = {
    getAllStud,
    createStud,
    MongoLibMock
}
