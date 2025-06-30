import 'reflect-metadata';
import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from '@/config/db.config';
import { DataSource } from 'typeorm';
import { DatabaseModule } from './database/database.module';
import { ContactsModule } from './contacts/contact.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CqrsModule.forRoot(),
    TypeOrmModule.forRoot({
      ...dbConfig,
      type: 'postgres',
      entities: ['src/**/entities/*.entity.ts'],
      synchronize: false,
      migrations: ['src/database/migrations/*.ts'],
      migrationsRun: false,
      logging: true,
    }),
    DatabaseModule,
    ContactsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
