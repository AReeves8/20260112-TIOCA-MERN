import { render, screen } from "@testing-library/react";
import { describe, expect, it, test } from "vitest";
import Movies from "../Movies";
import { mockMovie, mockMovieWithoutDirector } from "../../tests/mocks/Movies.mock";

// decsribe creates a test suite that can all be ran in jest/vitest
describe('Movies Component', () => {

    /**
     * Jest and Vitest can be used for logical unit testing
     *      BUT they can also be used to test the DOM and how things are being rendered
     */


    // use test(), or it() to create individual tests in jest/vitest
    it('renders movie details', () => {

        // render the component with mock data to the js dom
        render(<Movies movie={mockMovie} />);

        // for assertions in jest/vitest we use expect() with varying matchers (toBe functions)
        // expect contains actual value generated in test. matcher function contains expected value for a passing test
        expect(screen.getByText('Avatar')).toBeInTheDocument();
        expect(screen.getByText('8')).toBeInTheDocument();
        expect(screen.getByText('James Cameron')).toBeInTheDocument();
    });

    test('handles movies without directors', () => {
        // render the component with mock data to the js dom
        render(<Movies movie={mockMovieWithoutDirector} />);

        // for assertions in jest/vitest we use expect() with varying matchers (toBe functions)
        // expect contains actual value generated in test. matcher function contains expected value for a passing test
        expect(screen.getByText('Avatar')).toBeInTheDocument();
        expect(screen.getByText('8')).toBeInTheDocument();
        //expect(screen.getByText('James Cameron')).toThrow('TestingLibraryElementError');
    });

    /**
     * snapshots - another way to test dom
     *      the idea is to create a "snapshot" of what our DOM looks like and then compare to it on subsequent tests
     */
    it('matches snapshot', () => {
        
        // asFragment gives us a piece of our DOM
        const { asFragment } = render(<Movies movie={mockMovie} />);

        // testing if this matches an existing snapshot. if one doesn't exist, then it will be generated.
        expect(asFragment()).toMatchSnapshot();
    });
});