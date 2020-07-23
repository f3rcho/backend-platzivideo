const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    const moviesService = new MoviesService;

    router.get('/', async function(req, res, next) {
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });

            res.status(200).json({
                data: movies,
                message: 'movies listed',
            });
        } catch (error) {
            next(error);
        };
    });
    router.get('/:movieId', async function(req, res, next) {
        const { movieId } = req.params;
        try {
            const movies = await moviesService.getMovie({ movieId });

            res.status(200).json({
                data: movies,
                message: 'movies retrieved',
            });
        } catch (error) {
            next(error);
        };
    });
    router.post('/', async function(req, res, next) {
        const { body: movie } = req;
        try {
            const createMovieId = await moviesService.createMovie({ movie })

            res.status(201).json({
                data: createMovieId,
                message: 'movies created',
            });
        } catch (error) {
            next(error);
        };
    });
    router.put('/:movieId', async function(req, res, next) {
        const { movieId } = req.params
        const { body: movie } = req;
        try {
            const movies = await moviesService.updateMovie({ movieId, movie })

            res.status(200).json({
                data: movies,
                message: 'movie updated',
            });
        } catch (error) {
            next(error);
        };
    });
    router.delete('/:movieId', async function(req, res, next) {
        const { movieId } = req.params;
        try {
            const deleteMovieId = await moviesService.deleteMovie({ movieId })
            res.status(200).json({
                data: deleteMovieId,
                message: 'movie deleted',
            });
        } catch (error) {
            next(error);
        };
    });
    router.patch('/:movieId', async function(req, res, next) {
        const { movieId } = req.params;
        const { body: movie } = req;
        try {
            const deleteMovieId = await moviesService.deleteMovie({ movieId, movie })
            res.status(200).json({
                data: deleteMovieId,
                message: 'movie edited',
            });
        } catch (error) {
            next(error);
        };
    });
};
module.exports = moviesApi;