import {Controller, Delete, Get, Param, Post, Query} from '@nestjs/common';
import {Collection} from "../entities/Collection";
import {CollectionService} from "./collection.service";

@Controller('collection')
export class CollectionController {
  constructor(private readonly collectionService: CollectionService) {}

  @Get()
  async findAll(): Promise<{ results: Collection[]}> {
    return {
      results: await this.collectionService.find()
    };
  }

  @Post(':pokemonId')
  async catch(@Param('pokemonId') pokemonId: string): Promise<{ result: Collection}> {
    return {
      result: await this.collectionService.catch(pokemonId)
    };
  }

  @Delete(':pokemonId')
  async remove(@Param('pokemonId') pokemonId: string): Promise<{ pokemonId: string}> {
    await this.collectionService.remove(pokemonId)
    return { pokemonId };
  }
}
