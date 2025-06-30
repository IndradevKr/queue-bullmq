import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './entities/contact.entity';
import { GetContactsQueryHandler } from './queries/handler/get-contacts.query.handler';
import { ContactController } from './http/contact.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Contact])],
  providers: [GetContactsQueryHandler],
  controllers: [ContactController],
})
export class ContactsModule {}
