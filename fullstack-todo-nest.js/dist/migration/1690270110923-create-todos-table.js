"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTodosTable1690270110923 = void 0;
class CreateTodosTable1690270110923 {
    async up(queryRunner) {
        queryRunner.query(`
            CREATE TABLE todos (
                id SERIAL PRIMARY KEY,
                text text NOT NULL,
                completed BOOLEAN NOT NULL DEFAULT false
            );
        `);
    }
    async down(queryRunner) {
        queryRunner.query(`
            DROP TABLE todos;
        `);
    }
}
exports.CreateTodosTable1690270110923 = CreateTodosTable1690270110923;
//# sourceMappingURL=1690270110923-create-todos-table.js.map