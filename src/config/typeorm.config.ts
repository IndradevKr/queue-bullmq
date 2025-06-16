import { DataSource } from 'typeorm';
import { dbConfig } from './db.config';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  synchronize: false,
  entities: ['src/**/entities/*.ts'],
  migrations: ['src/database/migrations/*.ts'],
  migrationsRun: false,
  logging: true,
});

export default AppDataSource;
