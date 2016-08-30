import {Component, ViewChild} from '@angular/core';
import {HTTP_BINDINGS, Http} from '@angular/http';
import 'rxjs/Rx';

import {Friend} from '../BusinessObjects';
import {FriendComponent} from './friend.component'

@Component({
    selector: 'friends',
    templateUrl: './app/Components/friends.component.html',
    directives:[FriendComponent]
})

export class FriendsComponent {
    friends:Friend[] = [];
    constructor(private _http:Http) {
        _http.get('data/data.json').subscribe(res => {
            this.friends = res.json();
        });
    }        
}