import { Component } from '@angular/core';
import {FriendsComponent} from './Components/friends.component';

@Component({
    selector: 'my-app',
    template: '<h1>Friends</h1><friends></friends>',
    directives: [FriendsComponent]
})
export class AppComponent { }