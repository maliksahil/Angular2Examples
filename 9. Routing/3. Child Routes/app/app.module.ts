import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './Components/app.component';
import { OneComponent } from './Components/one.component';
import { HomeComponent } from './Components/home.component';
import { FriendComponent } from './Components/friend.component';
import { FriendsComponent } from './Components/friends.component';
import {FriendsAppComponent} from './Components/friendsapp.component'

import { routing } from './customapp.routes';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, routing],
    declarations: [AppComponent, HomeComponent, FriendComponent, FriendsComponent, FriendsAppComponent, OneComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }