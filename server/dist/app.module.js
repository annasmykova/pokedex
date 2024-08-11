"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Pokemon_1 = require("./entities/Pokemon");
const pokemons_module_1 = require("./pokemons/pokemons.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: process.env.POSTGRES_HOST || 'localhost',
                port: 5432,
                username: process.env.POSTGRES_USER || 'myuser',
                password: process.env.POSTGRES_PASSWORD || 'mypassword',
                database: process.env.POSTGRES_DB || 'mydb',
                entities: [Pokemon_1.Pokemon],
                synchronize: true,
            }),
            pokemons_module_1.PokemonsModule,
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map