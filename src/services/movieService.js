import { movieApi } from "../constants/movie";

export const mapMovies = ({ movies }) => {
    return movies?.map((movie) => {
        return {
            id: movie.imdbID,
            title: movie.Title,
            year: movie.Year,
            image: movie.Poster,
        };
    });
};

export const getMoviesFromApi = async ({ search }) => {
    return fetch(`${movieApi.URL()}&s=${search}`)
        .then(response => response.json())
        .then(data => data.Search)
}