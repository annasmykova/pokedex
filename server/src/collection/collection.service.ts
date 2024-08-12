import {Injectable} from '@nestjs/common';
import {AppDataSource} from "../data-source";
import {Collection} from "../entities/Collection";

@Injectable()
export class CollectionService {

  async find(): Promise<Collection[]> {
    return await AppDataSource.getRepository(Collection).find({ relations: ['pokemon'] })
  }
  async catch(pokemonId: string): Promise<Collection> {
    const newSavedPokemon = await AppDataSource.getRepository(Collection).save({
      pokemonId: Number(pokemonId)
    })
    return await AppDataSource.getRepository(Collection).findOne({
      where: { id: newSavedPokemon.id},
      relations: ['pokemon']
    })
  }
  async remove(pokemonId: string) {
    return await AppDataSource.getRepository(Collection).delete({ pokemonId: Number(pokemonId) })
  }
}
