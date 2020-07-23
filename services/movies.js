const { moviesMock } = require('../utils/mocks/movies');

class MoviesServices {
    async getMovies() {
        const movies = await Promise.resolve(moviesMock);
        return movies || [];
    };

    async getMovie() {
        const movie = await Promise.resolve(moviesMock[0]);
        return movie || {};
    };

    async createMovie() {
        const createMoviedId = await Promise.resolve(moviesMock[0].id);
        return createMoviedId;
    };

    async updateMovie() {
        const updatedMovieId = await Promise.resolve(moviesMock[0].id);
        return updatedMovieId;
    };

    async deleteMovie() {
        const deletedMovieId = await Promise.resolve(moviesMock[0].id);
        return deletedMovieId;
    };
    async editedMovie() {
        const editedMovieId = await Promise.resolve(moviesMock[0].id);
        return editedMovieId;
    };
};

module.exports = MoviesServices;
