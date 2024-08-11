import { Pokemon } from "../entities/Pokemon";
export declare class PokemonsService {
    find(q?: string): Promise<Pokemon[]>;
}
