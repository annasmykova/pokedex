import {Controller, Get, Param, Query} from '@nestjs/common';
import {Pokemon} from "../entities/Pokemon";
import {PokemonsService} from "./pokemons.service";

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonsService) {}

  @Get()
  async findAll(@Query() query: any): Promise<{ results: Pokemon[], total: number}> {
    const q = query.q
    const page = Number(query.page)
    return {
      results: await this.pokemonService.find(q, page) || [],
      total: await this.pokemonService.count(q) || 0,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<{ result: Pokemon}> {
    return {
      result: await this.pokemonService.findOne(id)
    };
  }
}
