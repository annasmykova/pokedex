import {createContext, useContext, useEffect, useMemo, useState} from "react";
import {apiUrl} from "../utils/constants";

const defaultValue = {
    loading: true,
    pokemons: {
        ids: [],
        list: [],
    },
    actions: {
        catchPokemon: () => {},
        fetchSavedList: () => {},
        removePokemon: () => {},
        hasPokemon: () => {},
    }
}

export const CollectionContext = createContext(defaultValue)

export const CollectionProvider = (props) => {
    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])

    useEffect(() => {
        fetchSavedList()
    }, [])

    const fetchSavedList = async () => {
        const res = await fetch(`${apiUrl}/collection`)
        const data = await res.json()

        setList(data.results)
        setLoading(false)
    }

    const catchPokemon = async (pokemonId) => {
        try {
            setLoading(true)
            const res = await fetch(`${apiUrl}/collection/${pokemonId}`, {
                method: 'POST'
            })
            const data = await res.json()
            setList([...list, data.result])
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    const removePokemon = async (id) => {
        try {
            setLoading(true)
            await fetch(`${apiUrl}/collection/${id}`, {
                method: 'DELETE'
            })
            setList(list.filter(({pokemonId}) => pokemonId !== id))
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    const hasPokemon = (id) => {
        return ids.includes(Number(id))
    }

    const ids = useMemo(() => list.map(({pokemonId}) => pokemonId), [list])

    const value = {
        loading,
        pokemons: {
            ids,
            list,
        },
        actions: {
            catchPokemon,
            fetchSavedList,
            removePokemon,
            hasPokemon,
        }

    }
    return (<CollectionContext.Provider value={value}>
        {props.children}
    </CollectionContext.Provider>)
}

export const useCollectionContext = () => {
    return useContext(CollectionContext)
}
