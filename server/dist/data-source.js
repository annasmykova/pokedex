"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Pokemon_1 = require("./entities/Pokemon");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    username: process.env.POSTGRES_USER || 'myuser',
    password: process.env.POSTGRES_PASSWORD || 'mypassword',
    database: process.env.POSTGRES_DB || 'mydb',
    synchronize: false,
    logging: true,
    entities: [Pokemon_1.Pokemon],
    migrations: ['dist/migrations/*{.ts,.js}'],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map