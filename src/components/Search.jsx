import { useId } from "react";
import { movieApi } from "../constants/movie";

const Search = ({
  search,
  updateSearch,
  handleSubmit,
  error,
  debounceGetMovies,
  handleSort,
  sort,
}) => {
  const orderId = useId();

  return (
    <header>
      <h1><span>Movie</span>Search</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          value={search}
          onChange={({ target }) => {
            updateSearch(target.value);
            debounceGetMovies({ search: target.value });
          }}
          type="text"
          placeholder="Spiderman, Batman, Scarie Movie..."
        />
        <button type="submit" className="search-button">
          Search
        </button>
        <input
          id={orderId}
          type="checkbox"
          onChange={handleSort}
          checked={sort}
        />
        <label htmlFor={orderId}>Order with title</label>
      </form>
      {error ? <h5 className="error">{error}</h5> : null}
    </header>
  );
};

export default Search;
