import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/bundles/upgrade-static.umd';

import { ContactsListItemComponent } from './contacts-list-item-component/contacts-list-item-component';

@NgModule({
  imports: [BrowserModule, UpgradeModule],
  declarations: [ContactsListItemComponent],
  entryComponents: [ContactsListItemComponent]
})
export class AppModule {
  ngDoBootstrap() { }
}