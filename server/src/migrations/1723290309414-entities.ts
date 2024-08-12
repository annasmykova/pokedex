import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1723290309414 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pokemon" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "image" character varying NOT NULL, "type" character varying NOT NULL, CONSTRAINT "PK_0b503db1369f46c43f8da0a6a0a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "collection" ("id" SERIAL NOT NULL, "pokemon_id" integer NOT NULL, CONSTRAINT "REL_f98f2a4a135641a88d7bc1044b" UNIQUE ("pokemon_id"), CONSTRAINT "PK_ad3f485bbc99d875491f44d7c85" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "collection" ADD CONSTRAINT "FK_f98f2a4a135641a88d7bc1044bd" FOREIGN KEY ("pokemon_id") REFERENCES "pokemon"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "collection" DROP CONSTRAINT "FK_f98f2a4a135641a88d7bc1044bd"`);
        await queryRunner.query(`DROP TABLE "collection"`);
        await queryRunner.query(`DROP TABLE "pokemon"`);
    }

}
