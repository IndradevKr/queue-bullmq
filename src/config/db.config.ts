import 'dotenv/config';

export const dbConfig = {
  type: 'postgres',
  port: parseInt(process.env.DATABASE_PORT || '5432', 10),
  host: process.env.DB_HOST!,
  username: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_DATABASE_NAME!,
};
