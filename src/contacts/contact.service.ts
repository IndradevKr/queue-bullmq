import { Injectable } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetContactsQuery } from './queries/get-contacts.query';
import { Contact } from './entities/contact.entity';

@Injectable()
export class ContactsService {
  constructor(private queryBus: QueryBus) {}

  async getContacts(): Promise<Contact[]> {
    return await this.queryBus.execute(new GetContactsQuery());
  }
}
