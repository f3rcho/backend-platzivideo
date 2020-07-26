// const { moviesMock } = require('../utils/mocks/movies');
const MongoLib = require('../lib/mongo');
// const MongoLib = require('../lib/myMongoDb');

class MoviesServices {
    constructor() {
        this.collection = 'movies';
        this.mongoDB = new MongoLib();
    }

    async getMovies({ tags }) {
        const query = tags && { tags: { $in: tags }};
        const movies = await this.mongoDB.getAll(this.collection, query);
        return movies || [];
    };

    async getMovie({ movieId }) {
        const movie = await this.mongoDB.get(this.collection, movieId)
        return movie || {};
    };

    async createMovie({ movie }) {
        const createMoviedId = await this.mongoDB.create(this.collection, movie);
        return createMoviedId;
    };

    async updateMovie({ movieId, movie } = {}) {
        const updatedMovieId = await this.mongoDB.update(
            this.collection,
            movieId,
            movie,
        )
        return updatedMovieId;
    };

    async deleteMovie({ movieId }) {
        const deletedMovieId = await this.mongoDB.delete(this.collection, movieId);
        return deletedMovieId;
    };
    async editedMovie({ movieId, movie } = {}) {
        const editedMovieId = await this.mongoDB.update(this.collection, movieId, movie);
        return editedMovieId;
    };
};

module.exports = MoviesServices;
