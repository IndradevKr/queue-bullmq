import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateContactsTable1749806333989 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
    await queryRunner.createTable(
      new Table({
        name: 'contacts',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()',
          }),
          new TableColumn({
            name: 'first_name',
            type: 'varchar',
            length: '60',
            isNullable: false,
          }),
          new TableColumn({
            name: 'last_name',
            type: 'varchar',
            length: '60',
            isNullable: true,
          }),
          new TableColumn({
            name: 'email',
            type: 'varchar',
            length: '254',
            isNullable: false,
          }),
          new TableColumn({
            name: 'phone',
            type: 'varchar',
            length: '20',
            isNullable: true,
          }),
          new TableColumn({
            name: 'country',
            type: 'varchar',
            length: '90',
            isNullable: true,
          }),
          new TableColumn({
            name: 'created_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
          }),
          new TableColumn({
            name: 'updated_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contacts');
  }
}
// To run migration for now:
//
//  pnpm exec ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:run -d ./src/config/typeorm.config.ts
//
