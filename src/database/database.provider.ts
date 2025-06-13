import { dbConfig } from '@/config';
import { DataSource, DataSourceOptions } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        ...dbConfig,
        type: 'postgres',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: false,
      } as DataSourceOptions);

      return dataSource.initialize();
    },
  },
];
