import { Movie } from "../models/movie.model.js";

export const MovieRepository = {
    findAll: () => Movie.find(),
    findAllWithDirectors: () => Movie.find().populate("director"),   // will provide director data instead of just IDs
    createMovie: (data) => Movie.create(data),
    findByMinRating: (minRating) => Movie.findByMinRating(minRating),
    findByDirector: (diretorId) => Movie.find().byDirector(diretorId)
}