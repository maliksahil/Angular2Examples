import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/bundles/upgrade-static.umd';

@NgModule({
  imports: [BrowserModule, UpgradeModule],
})
export class AppModule {
  ngDoBootstrap() { }
}