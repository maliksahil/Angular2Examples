import {Injectable} from '@angular/core';

@Injectable()
export class ContactsService {
  private CONTACT_DATA = [
    {
      id: 0,
      name: 'Sahil Malik',
      email: 'sahilmalik@winsmarts.com'
    },
    {
      id: 1,
      name: 'Mickey Mouse',
      email: 'contact@winsmarts.com'
    },
    {
      id: 2,
      name: 'Goofy',
      email: 'goofy@winsmarts.com'
    }
  ];

  getContacts () {
    return this.CONTACT_DATA;
  }

  getContact (id: string) {
    return this.CONTACT_DATA.find(contact => contact.id.toString() === id);
  }
}