import { beforeEach, describe, expect, test, vi, type Mock } from "vitest";
import { movieApi } from "../apis/movieApi";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { mockMovie, mockMoviesList } from "../tests/mocks/Movies.mock";

// creating mock functions for API callouts
vi.mock('../apis/movieApi', () => ({
    movieApi : {
        useFindAllMoviesQuery: vi.fn(),     // generates a blank function that will be called instead of the real funcitonn in the component
        useCreateMovieMutation: vi.fn()
    }
}));

describe('App Component', () => {

    /**
     * TEST LIFECYCLE METHODS
     *      beforeAll, afterAll - run once before/after all tests in this test suite
     *      beforeEach, afterEach - run before/after each test method in the test suite
     * 
     *      used for test setup and teardown of resources that are used on your tests
     */

    // mocking api functions before each test
    beforeEach(() => {
        
        // setup mock for find all movies callout
        (movieApi.useFindAllMoviesQuery as Mock).mockReturnValue({
            data: mockMoviesList,
            refetch: vi.fn()
        });

        // setup mock for create new movie callout
        (movieApi.useCreateMovieMutation as Mock).mockReturnValue([
            vi.fn(),
        ]);
    });

    test('renders movies from API', () => {
            
        // loading App component - calls useFindAllMoviesQuery on mount
        render(<App />);

        expect(screen.getByText('Avatar')).toBeInTheDocument();
        expect(screen.getByText('Shawshank Redemption')).toBeInTheDocument();
        expect(screen.getByText('The Room')).toBeInTheDocument();
    });

});