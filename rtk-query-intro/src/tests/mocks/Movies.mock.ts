import type { Movie } from "../../types/Movies";

// list of movies
export const mockMoviesList : Movie[] = [
    {
        id: 1, 
        title: "Avatar",
        rating: 8, 
        director: {
            firstName: "James",
            lastName: "Cameron"
        }
    },
    {
        id: 2, 
        title: "Shawshank Redemption",
        rating: 9, 
        director: {
            firstName: "James",
            lastName: "Cameron"
        }
    },
    {
        id: 3, 
        title: "The Room",
        rating: 2, 
        director: {
            firstName: "Tommy",
            lastName: "Wise-O"
        }
    }
];

// single movie
export const mockMovie: Movie = {
    id: 1, 
    title: "Avatar",
    rating: 8, 
    director: {
        firstName: "James",
        lastName: "Cameron"
    }
}

// edge case mock data
export const mockMovieWithoutDirector: Movie = {
    id: 1, 
    title: "Avatar",
    rating: 8
}
