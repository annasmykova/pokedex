import {MigrationInterface, Not, QueryRunner} from "typeorm";
import {Pokemon} from "../entities/Pokemon";

export class CreatePokemons1723355986368 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1400')
        let acc = 0
        const data = await res.json()
        for (const resItem of data.results) {
            const item = await fetch (resItem.url as string)
            const pokemon = await item.json()
            if (!acc) {
                acc++
            }
            await queryRunner.manager.getRepository(Pokemon).save({
                name: pokemon.name,
                type: pokemon.types[0].type.name,
                image: pokemon.sprites.front_default || pokemon.sprites.front_female || pokemon.sprites.front_shiny || pokemon.sprites.back_default || ''
            })
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.manager.getRepository(Pokemon).delete({ id: Not(null)})
    }

}
