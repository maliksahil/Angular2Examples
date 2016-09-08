import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './Components/app.component';
import { HomeComponent } from './Components/home.component';
import { OneComponent } from './Components/one.component';
import { TwoComponent } from './Components/two.component';

import { routing } from './customapp.routes';

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, OneComponent, TwoComponent, HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }