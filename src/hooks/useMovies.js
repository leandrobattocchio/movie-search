import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import mockMovies from "../mocks/movies.json";
import { getMoviesFromApi, mapMovies } from "../services/movieService";


const useMovies = ({ search, sort }) => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false)
    const lastSearch = useRef(search);

    const getMovies = useCallback(async ({ search }) => {
        if (lastSearch.current !== search && search !== '' && search.length > 3) {
            setLoading(true)
            const newMovies = await getMoviesFromApi({ search })
            lastSearch.current = search
            setMovies(mapMovies({ movies: newMovies }))
            setLoading(false)
        }
    }, [])


    useEffect(() => {
        setMovies(mapMovies({ movies: mockMovies.Search }))
    }, [])


    const sortedMovies = useMemo(() => {
        if (!movies?.length > 0) return
        return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
    }, [sort, movies])

    return { movies: sortedMovies, loading, getMovies }
}

export default useMovies