import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { Contact } from './contact.entity';
import { ContactsService } from './contacts.service';
import { Post,Put, Delete, Body, Param } from  '@nestjs/common';

@Controller('contacts')
export class ContactsController {

    constructor(private contactsService: ContactsService){}


    @Get()
    index(): Promise<Contact[]> {
      return this.contactsService.findAll();
    }  

    @Post()
    async create(@Body() contactData: Contact): Promise<any> {
      return this.contactsService.create(contactData);
    }  

    @Put(':id')
    async update(@Param('id') id, @Body() contactData: Contact): Promise<any> {
        contactData.id = Number(id);
        console.log('Update #' + contactData.id)
        return this.contactsService.update(contactData);
    }  

    @Delete(':id')
    async delete(@Param('id') id): Promise<any> {
      return this.contactsService.delete(id);
    } 
    

}
