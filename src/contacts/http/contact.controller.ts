import { Controller, Get, HttpCode } from '@nestjs/common';
import { Contact } from '../entities/contact.entity';
import { ContactsService } from '../contact.service';

@Controller('/contacts')
export class ContactController {
  constructor(private readonly contactService: ContactsService) {}

  @Get()
  @HttpCode(201)
  async findAll(): Promise<Contact[]> {
    return await this.contactService.getContacts();
  }
}
