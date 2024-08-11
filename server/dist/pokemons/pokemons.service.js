"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const Pokemon_1 = require("../entities/Pokemon");
let PokemonsService = class PokemonsService {
    async find(q) {
        return await (0, typeorm_1.getRepository)(Pokemon_1.Pokemon).find(q ? {
            where: { name: (0, typeorm_1.Like)(`%${q.toLowerCase()}%`) }
        } : undefined);
    }
};
exports.PokemonsService = PokemonsService;
exports.PokemonsService = PokemonsService = __decorate([
    (0, common_1.Injectable)()
], PokemonsService);
//# sourceMappingURL=pokemons.service.js.map