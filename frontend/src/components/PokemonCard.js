import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useCollectionContext} from "../contexts/CollectionContext";
import {Link} from "react-router-dom";

export default function PokemonCard({
                                        image, name, type, id
                                    }) {
    const {actions: {catchPokemon, removePokemon, hasPokemon}} = useCollectionContext()
    return (
        <Card sx={{maxWidth: 345}} style={{margin: 16, backgroundColor: '#f6f4f4'}}>
            <CardMedia
                sx={{height: 140}}
                image={image}
                title={name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {type}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    size="small"
                    onClick={() => hasPokemon(id) ? removePokemon(id) : catchPokemon(id)}
                >
                    {hasPokemon(id) ? 'Remove' : 'Catch'}
                </Button>
                <Button size="small"><Link to={`/pokemons/${id}`}>Learn More</Link></Button>
            </CardActions>
        </Card>
    );
}
