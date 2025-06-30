import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetContactsQuery } from '../get-contacts.query';
import { InjectRepository } from '@nestjs/typeorm';
import { Contact } from '@/contacts/entities/contact.entity';
import { Repository } from 'typeorm';

@QueryHandler(GetContactsQuery)
export class GetContactsQueryHandler
  implements IQueryHandler<GetContactsQuery>
{
  constructor(
    @InjectRepository(Contact) private contactsRepository: Repository<Contact>,
  ) {}

  async execute(): Promise<Contact[]> {
    return this.contactsRepository.find();
  }
}
