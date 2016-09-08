import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import {Friend} from '../friend';
import {FriendsService} from '../friends.service'

@Component({
  selector: 'friend',
  templateUrl: './app/Components/friend.component.html',
  providers: [FriendsService]
})

export class FriendComponent {
  id: string = "unknown";
  friends: Observable<Friend[]> = null;

  constructor(
    private _friendsService: FriendsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
    this._activatedRoute.params.subscribe(params => {
      this.id = params["id"];
      this.friends = this._friendsService.getFriends(this.id).take(1);
    });
  }

  goToFriends() {
    let route = ['friends']
    this._router.navigate(route);
  }

  activeCheckBox(friend:Friend) {
    friend.isActive = !friend.isActive;    
  }
}