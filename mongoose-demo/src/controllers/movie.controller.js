import { MovieService } from "../services/movie.service.js";

export const MovieController = {
    getAll: async (req, res) => {
        const movies = await MovieService.getAll();
        res.json(movies);
    },
    getAllWithDirectors: async (req, res) => {
        const movies = await MovieService.getAllWithDirectors();
        res.json(movies);
    },
    getAllWithMinRating: async (req, res) => {
        const movies = await MovieService.findByMinRating(req.params.rating);
        res.json(movies);
    },
    getAllByDirector: async (req, res) => {
        const movies = await MovieService.findByDirector(req.params.id);
        res.json(movies);
    },
    createNewMovie: async (req, res) => {
        try {
            const movie = await MovieService.createMovie(req.body);
            res.status(201).json(movie);
        } catch (error) {
            res.status(400).json("Invalid rating.");
        }
    },

}