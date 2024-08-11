import {Injectable} from '@nestjs/common';
import {getRepository, Like} from "typeorm";
import {Pokemon} from "../entities/Pokemon";

@Injectable()
export class PokemonsService {
  async find(q?: string): Promise<Pokemon[]> {
    return await getRepository(Pokemon).find(q ? {
      where: {name: Like(`%${q.toLowerCase()}%`)}
    } : undefined)
  }
}
