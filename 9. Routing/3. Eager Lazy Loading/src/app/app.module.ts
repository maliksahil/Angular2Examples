import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Eagerly loaded Module
import { AppModule as HomeModule } from './home/app.module';
import { AppRoutingModule, routableComponents } from './app-routing.module';

@NgModule({
    imports: [
        HomeModule,
        BrowserModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent, routableComponents
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
