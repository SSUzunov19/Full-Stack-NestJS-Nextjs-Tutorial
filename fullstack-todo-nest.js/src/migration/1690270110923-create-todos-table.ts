import { text } from "stream/consumers";
import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTodosTable1690270110923 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            CREATE TABLE todos (
                id SERIAL PRIMARY KEY,
                text text NOT NULL,
                completed BOOLEAN NOT NULL DEFAULT false
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`
            DROP TABLE todos;
        `);
    }

}
