import Page from "../components/Page";
import {useEffect, useState} from "react";
import {apiUrl} from "../utils/constants";
import {TextField} from "@mui/material";
import Box from "@mui/material/Box";
import PokemonCard from "../components/PokemonCard";
import InfiniteScroll from 'react-infinite-scroller';

const Home = () => {
    const [loading, setLoading] = useState(true)
    const [pokemons, setPokemons] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(0)
    const [q, setQ] = useState('')
    useEffect(() => {
        fetchPokemons()
    }, [])
    const fetchPokemons = async (q, currentPage = 0, update = false) => {
        setLoading(true)
        const res = await fetch(`${apiUrl}/pokemons?page=${currentPage}${q ? '&q=' + q : ''}`)
        const data = await res.json()
        setPokemons(update ?  data.results : [...pokemons, ...data.results])
        setTotal(data.total)
        setLoading(false)
    }
    const handleSearch = (event) => {
        const newQ = event.target.value
        const newPage = 0
        fetchPokemons(newQ, newPage, newQ !== q)
        setQ(newQ)
        setPage(newPage)
    }
    const loadMore = () => {
        const newPage = page + 1
        setPage(newPage)
        fetchPokemons(q, newPage)
    }
    return (<Page>
        Search for your pokemon!
        <Box>
            <TextField
                id="filled-search"
                label="Search field"
                type="search"
                variant="filled"
                value={q}
                onChange={handleSearch}
            />

        </Box>
        <InfiniteScroll
            pageStart={0}
            loadMore={loadMore}
            hasMore={!loading && total > pokemons.length}
            loader={<div className="loader" key={0}>Loading ...</div>}
        >
            <Box display="flex" flexWrap="wrap" margin="0 -16px">
                {
                    pokemons.map(pokemon => <PokemonCard key={pokemon.id} {...pokemon}/>)
                }
            </Box>
        </InfiniteScroll>
    </Page>)
}

export default Home
