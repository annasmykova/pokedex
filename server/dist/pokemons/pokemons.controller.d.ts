import { PokemonsService } from "./pokemons.service";
export declare class PokemonsController {
    private readonly pokemonService;
    constructor(pokemonService: PokemonsService);
    findAll(params: any): string;
}
