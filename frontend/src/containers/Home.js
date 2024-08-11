import Page from "../components/Page";
import {useEffect, useState} from "react";

const Home = () => {
    const [pokemons, setPokemons] = useState([])
    const fetchPokemons = async () => {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1400')
        console.log('res');
        console.log(res);
        console.log(await res.json());
    }
    useEffect(() => {
        fetchPokemons()
    }, [])
    return (<Page>
        Search for pokemon
    </Page>)
}

export default Home
