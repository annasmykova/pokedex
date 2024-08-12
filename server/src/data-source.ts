import { DataSource } from 'typeorm';
import {Collection} from "./entities/Collection";
import {Pokemon} from "./entities/Pokemon";


export const AppDataSource = new DataSource({
  name: 'default',
  type: 'postgres',
  host: process.env.POSTGRES_HOST || 'localhost',
  port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
  username: process.env.POSTGRES_USER || 'myuser',
  password: process.env.POSTGRES_PASSWORD || 'mypassword',
  database: process.env.POSTGRES_DB || 'mydb',
  synchronize: true, // Set to false for production
  logging: true,
  entities: [Pokemon, Collection], // Add your entities here
  migrations: ['dist/migrations/*{.ts,.js}'],
  subscribers: [],
});
