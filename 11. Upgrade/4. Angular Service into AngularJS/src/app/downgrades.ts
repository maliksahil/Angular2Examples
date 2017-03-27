import { downgradeComponent, downgradeInjectable } from '@angular/upgrade/static';

import { ContactsListItemComponent } from './contacts-list-item-component/contacts-list-item-component';
import { ContactsService } from './contacts-service/contacts-service';

import { IAngularStatic } from 'angular';
declare var angular: IAngularStatic;

angular.module('contacts-app')
    .directive(
    'contactsListItemComponent',
    downgradeComponent({
        component: ContactsListItemComponent,
        inputs: ['contact']
    }));

angular
  .module('contacts-service', [])
    .service('contactsService', downgradeInjectable(ContactsService));