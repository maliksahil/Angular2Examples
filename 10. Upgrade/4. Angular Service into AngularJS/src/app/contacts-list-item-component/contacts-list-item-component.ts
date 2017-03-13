import { Component, Input } from '@angular/core';
import { Contact } from '../models/contact';

@Component({
  selector: 'contacts-list-item-component',
  template: '<a href="#/contact/{{contact.id}}"><span>{{contact.name}}</span></a>'
})
export class ContactsListItemComponent {
  @Input() contact: Contact;
}