import {useEffect, useState} from "react";
import Page from "../components/Page";
import {useParams} from "react-router-dom";
import {Grid, Typography, Button, Box} from "@mui/material";
import {apiUrl} from "../utils/constants";
import {useCollectionContext} from "../contexts/CollectionContext";

const PokemonPage = () => {
    const [pokemon, setPokemon] = useState(null)
    const [details, setDetails] = useState(null)
    const params = useParams()
    const id = params.id
    const {actions: {catchPokemon, removePokemon, hasPokemon}} = useCollectionContext()

    useEffect(() => {
        fetchPokemon()
    }, [])

    const fetchPokemon = async () => {
        const res = await fetch(`${apiUrl}/pokemons/${id}`)
        const data = await res.json()

        const detaisRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${data.result.name}`)
        const detailsData = await detaisRes.json()
        setPokemon(data.result)
        setDetails({
            abilities: detailsData.abilities,
            stats: detailsData.stats,
        })
    }

    return (<Page>
        <Typography variant="h2" gutterBottom>
            Pokemon Details
        </Typography>
        {
            pokemon
                ? <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <img src={pokemon.image} alt={pokemon.name} style={{width: '100%'}}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item>

                                <Typography variant="h3" gutterBottom>
                                    {pokemon.name}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography  variant="subtitle1"  gutterBottom>
                                    Type:
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                   {pokemon.type}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1" gutterBottom>
                                    Abilities:
                                </Typography>
                                <Typography variant="h5" gutterBottom>
                                    {details.abilities.map(({ability}) => ability.name).join(', ')}
                                </Typography>
                            </Grid>
                            <Grid item>

                                <Typography variant="subtitle1" gutterBottom>
                                    Stats:
                                </Typography>

                                    {details.stats.map(({stat, base_stat}) => (<Typography  variant="h5" gutterBottom>{stat.name}: {base_stat} </Typography>))}

                            </Grid>
                            <Grid item>
                                <Button
                                    size="large"
                                    onClick={() => hasPokemon(id) ? removePokemon(id) : catchPokemon(id)}
                                >
                                    {hasPokemon(id) ? 'Remove from my collection' : 'Catch this Pokemon'}
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                : ''
        }

    </Page>)
}

export default PokemonPage
