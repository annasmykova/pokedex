import { Module } from '@nestjs/common';
import {TypeOrmModule, TypeOrmModuleOptions} from '@nestjs/typeorm';
import {DataSource} from "typeorm";
import {CollectionModule} from "./collection/collection.module";
import {AppDataSource} from "./data-source";
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...AppDataSource.options,
      autoLoadEntities: true,
    } as TypeOrmModuleOptions),
    PokemonsModule,
    CollectionModule,
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
