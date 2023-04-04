const Movies = ({ movies }) => {
  return (
    <main>
      {movies?.length > 0 ? (
        <ul className="movies-grid">
          {movies?.map((movie) => {
            return (
              <li key={movie.id} className="movie-cartel">
                <div className="movie-info">
                  <p>{movie.title}</p>
                  <p>{movie.year}</p>
                </div>
                <img
                  src={movie.image}
                  alt={`An image of the movie '${movie.title}'`}
                />
              </li>
            );
          })}
        </ul>
      ) : (
        <div className="no-results-movie">
          <h1>No se han encontrado resultados para esta busqueda!</h1>
          <img
            src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmM1ZWIwOGZjZmNjNjI1NDNiNWM2ODA0Y2UzYjlmOTVmZmU4NGFiMSZjdD1n/g01ZnwAUvutuK8GIQn/giphy.gif"
            alt="No results for the search, a gif of John Travolta in Pulp Fiction"
          />
        </div>
      )}
    </main>
  );
};

export default Movies;
