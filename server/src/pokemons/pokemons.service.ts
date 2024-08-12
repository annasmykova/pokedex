import {Injectable} from '@nestjs/common';
import { Like} from "typeorm";
import {AppDataSource} from "../data-source";
import {Pokemon} from "../entities/Pokemon";

@Injectable()
export class PokemonsService {
  limit = 30;

  async find(q?: string, page = 0): Promise<Pokemon[]> {
    const config = {
      skip: this.limit * page,
      take: this.limit,
    }
    return await AppDataSource.getRepository(Pokemon).find(q ? {
      where: {name: Like(`%${q.toLowerCase()}%`)},
      ...config,
    } : config)
  }
  async count(q?: string): Promise<number> {
    return await AppDataSource.getRepository(Pokemon).count(q ? {
      where: {name: Like(`%${q.toLowerCase()}%`)}
    } : undefined)
  }
  async findOne(id: string): Promise<Pokemon> {
    return await AppDataSource.getRepository(Pokemon).findOne({
      where: {id: Number(id)}
    })
  }
}
