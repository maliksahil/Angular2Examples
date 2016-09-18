import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './Components/app.component';
import { HomeComponent } from './Components/home.component';
import { FriendComponent } from './Components/friend.component';
import { FriendsComponent } from './Components/friends.component';

import { routing } from './customapp.routes';

@NgModule({
    imports: [FormsModule, HttpModule, CommonModule, routing],
    declarations: [AppComponent, HomeComponent, FriendComponent, FriendsComponent]
})
export class AppModule { }