export const movieApi = {
    KEY: import.meta.env.VITE_MOVIE_API_KEY,
    URL: function () {
        return `https://www.omdbapi.com/?apikey=${this.KEY}`
    }
}