import React, { useEffect, useRef, useState } from "react";

const useSearch = () => {
    const [search, updateSearch] = useState('');
    const [error, setError] = useState(null)
    const firstSearch = useRef(true)

    useEffect(() => {
        if (firstSearch.current) {
            firstSearch.current = search === ''
            if (search === '') return
        }

        if (search === '') {
            setError('No puedes buscar una pelicula vacia!')
            return
        }

        if (search.length <= 3) {
            setError('Debes ingresar mas de tres caracteres!')
            return
        }

        if (search.match(/^\d+$/)) {
            setError('No se puede buscar una película con un número')
            return
        }
        setError(null)

    }, [search])



    return { search, updateSearch, error }
}
export default useSearch