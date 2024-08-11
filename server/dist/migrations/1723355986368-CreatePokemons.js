"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePokemons1723355986368 = void 0;
const typeorm_1 = require("typeorm");
const Pokemon_1 = require("../entities/Pokemon");
class CreatePokemons1723355986368 {
    async up(queryRunner) {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1400');
        let acc = 0;
        const data = await res.json();
        for (const resItem of data.results) {
            const item = await fetch(resItem.url);
            const pokemon = await item.json();
            if (!acc) {
                acc++;
                console.log(pokemon.name);
                console.log(pokemon.types[0].type);
                console.log(pokemon.sprites.front_default);
            }
            await queryRunner.manager.getRepository(Pokemon_1.Pokemon).save({
                name: pokemon.name,
                type: pokemon.types[0].type.name,
                image: pokemon.sprites.front_default || pokemon.sprites.front_female || pokemon.sprites.front_shiny || pokemon.sprites.back_default || ''
            });
        }
    }
    async down(queryRunner) {
        await queryRunner.manager.getRepository(Pokemon_1.Pokemon).delete({ id: (0, typeorm_1.Not)(null) });
    }
}
exports.CreatePokemons1723355986368 = CreatePokemons1723355986368;
//# sourceMappingURL=1723355986368-CreatePokemons.js.map