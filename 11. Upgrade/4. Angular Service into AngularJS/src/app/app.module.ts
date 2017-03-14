import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/bundles/upgrade-static.umd';

import { ContactsService } from './contacts-service/contacts-service';
import { ContactsListItemComponent } from './contacts-list-item-component/contacts-list-item-component';

@NgModule({
  imports: [BrowserModule, UpgradeModule],
  declarations: [ContactsListItemComponent],
  entryComponents: [ContactsListItemComponent],
  providers: [ContactsService]
})
export class AppModule {
  ngDoBootstrap() { }
}