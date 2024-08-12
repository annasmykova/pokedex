import Page from "../components/Page";
import {useCollectionContext} from "../contexts/CollectionContext";
import PokemonCard from "../components/PokemonCard";
import Box from "@mui/material/Box";

const Collection = () => {
    const {loading, pokemons: {list}} = useCollectionContext()
    return (<Page>
        <Box display="flex" flexWrap="wrap" margin="0 -16px">
            {
                loading ? '' : list.map(({pokemon}) => <PokemonCard key={pokemon.id} {...pokemon}/>)
            }
        </Box>
    </Page>)
}

export default Collection
