import {Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm';
import {Pokemon} from "./Pokemon";

@Entity()
export class Collection {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'pokemon_id'})
  pokemonId: number;

  @OneToOne(type => Pokemon)
  @JoinColumn({ name: "pokemon_id", referencedColumnName: "id" })
  pokemon: Pokemon;
}
