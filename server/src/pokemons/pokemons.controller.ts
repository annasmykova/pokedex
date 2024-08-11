import {Controller, Get, Param } from '@nestjs/common';
import {PokemonsService} from "./pokemons.service";

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonService: PokemonsService) {}

  @Get()
  findAll(@Param() params: any): string {
    const q = params.q
    return this.pokemonService.find(params);
  }
}
