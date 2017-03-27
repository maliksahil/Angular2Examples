import { downgradeComponent } from '@angular/upgrade/static';
import { ContactsListItemComponent } from './contacts-list-item-component/contacts-list-item-component';

import { IAngularStatic } from 'angular';
declare var angular: IAngularStatic;

angular.module('contacts-app')
    .directive(
    'contactsListItemComponent',
    downgradeComponent({ component: ContactsListItemComponent, inputs: ['contact'] }));