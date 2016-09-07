import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import { HttpModule }    from '@angular/http';

import {RemoveSpaces} from './Components/removespacepipe';
import {FriendsComponent} from './Components/friends.component';
import {FriendComponent} from './Components/friend.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [AppComponent, FriendsComponent, FriendComponent, RemoveSpaces],
  bootstrap: [AppComponent]
})
export class AppModule { }