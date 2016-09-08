import {Component, ViewChild, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import {Router} from '@angular/router'

import {Friend} from '../friend';
import {FriendsService} from '../friends.service'

@Component({
    selector: 'friends',
    templateUrl: './app/Components/friends.component.html',
    providers: [FriendsService]
})

export class FriendsComponent implements OnInit {
    friends: Observable<Friend[]> = null;
    constructor(private _friendsService: FriendsService, private _router: Router) { }
    ngOnInit() { this.friends = this._friendsService.getFriends(); }

    navigateFriend(friendID) {
        let link = ['/friend', friendID];
        this._router.navigate(link);
    }
}