import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {Pokemon} from "./entities/Pokemon";
import { PokemonsModule } from './pokemons/pokemons.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST || 'localhost',
      port: 5432,
      username: process.env.POSTGRES_USER || 'myuser',
      password: process.env.POSTGRES_PASSWORD || 'mypassword',
      database: process.env.POSTGRES_DB || 'mydb',
      entities: [Pokemon],
      synchronize: true,
    }),
    PokemonsModule,
  ],
})
export class AppModule {}
