import { MovieRepository } from "../repositories/movie.repo.js";

export const MovieService = {

    getAll: async () => {

        // getting movies out of db
        const movies = await MovieRepository.findAll();
        
        // finding average rating of all movies
        const avgRating = findAverageRatings(movies);

        // sending back movies and their average rating
        return {
            movies, 
            avgRating
        }
    },

    getAllWithDirectors: async () => {

        // getting movies out of db
        const movies = await MovieRepository.findAllWithDirectors();
        
        // finding average rating of all movies
        const avgRating = findAverageRatings(movies);

        // sending back movies and their average rating
        return {
            movies, 
            avgRating
        }
    },

    createMovie: async (newMovie) => {

        // business logic example: validating incoming data before saving
        if(!newMovie.rating || (newMovie.rating < 1 || newMovie.rating > 10)) {
            throw new Error("Ratings must be between 1 and 10.");
        }
        const movie = await MovieRepository.createMovie(newMovie);
        return movie;
    },

    findByMinRating: async (minRating) => {

        // getting movies out of db
        const movies = await MovieRepository.findByMinRating(minRating);
        
        // finding average rating of all movies
        const avgRating = findAverageRatings(movies);

        // sending back movies and their average rating
        return {
            movies, 
            avgRating
        }
    },

    findByDirector: async (directorId) => {

        // getting movies out of db
        const movies = await MovieRepository.findByDirector(directorId);
        
        // finding average rating of all movies
        const avgRating = findAverageRatings(movies);

        // sending back movies and their average rating
        return {
            movies, 
            avgRating
        }
    },

}

const findAverageRatings = (movies) => {
    if(movies && movies.length > 0) {
        let ratingSum = 0;
        for(const movie of movies) {
            ratingSum += movie.rating;  // summing up rating from movie model
        }
        return ratingSum / movies.length;
    }
    return 0;
}