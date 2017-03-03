import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { Friend } from '../friend';
import { FriendsService } from '../friends.service'

@Component({
  selector: 'friend',
  templateUrl: './friend.component.html',
  providers: [FriendsService]
})

export class FriendComponent {
  id = 'unknown';
  friends: Observable<Friend[]> = null;

  constructor(
    private _friendsService: FriendsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) {
      console.log(this._activatedRoute);
    this._activatedRoute.params.subscribe(params => {
      this.id = params["id"];
      this.friends = this._friendsService.getFriends(this.id).take(1);
    });
  }

  goToFriends() {
    const route = [this._activatedRoute.pathFromRoot[1].snapshot.url  + '/friends'];
    this._router.navigate(route);
  }

  activeCheckBox(friend: Friend) {
    friend.isActive = !friend.isActive;
  }
}