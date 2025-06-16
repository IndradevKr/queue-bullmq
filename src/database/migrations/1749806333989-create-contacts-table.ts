import { MigrationInterface, QueryRunner, Table, TableColumn } from 'typeorm';

export class CreateContactsTable1749806333989 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'contacts',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          }),
          new TableColumn({
            name: 'first_name',
            type: 'varchar(60)',
            isNullable: false,
          }),
          new TableColumn({
            name: 'last_name',
            type: 'varchar(60)',
            isNullable: true,
          }),
          new TableColumn({
            name: 'email',
            type: 'varchar(254)',
            isNullable: false,
          }),
          new TableColumn({
            name: 'phone',
            type: 'varchar(20)',
            isNullable: true,
          }),
          new TableColumn({
            name: 'country',
            type: 'varchar(90)',
            isNullable: true,
          }),
          new TableColumn({
            name: 'created_at',
            type: 'timestamptz',
            default: 'now()',
          }),
          new TableColumn({
            name: 'updated_at',
            type: 'timestamptz',
            default: 'now()',
          }),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contacts');
  }
}
