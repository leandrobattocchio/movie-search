import useMovies from "./src/hooks/useMovies";
import useSearch from "./src/hooks/useSearch";
import Movies from "./src/components/Movies";
import Search from "./src/components/Search";
import debounce from "just-debounce-it";
import { useCallback, useState } from "react";
import "./app.css";
import Spinner from "./src/components/Spinner";

const App = () => {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const handleSort = () => {
    setSort((prevState) => !prevState);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!error) {
      await getMovies({ search });
    }
  };

  const debounceGetMovies = useCallback(
    debounce(async ({ search, error }) => {
      if (!error) {
        await getMovies({ search });
      }
    }, 250),
    [getMovies]
  );

  return (
    <>
      <Search
        search={search}
        updateSearch={updateSearch}
        error={error}
        handleSubmit={handleSubmit}
        debounceGetMovies={debounceGetMovies}
        handleSort={handleSort}
        sort={sort}
      />
      {loading ? <Spinner /> : <Movies movies={movies} />}
    </>
  );
};

export default App;
