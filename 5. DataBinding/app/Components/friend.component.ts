import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Friend} from '../BusinessObjects';
import {RemoveSpaces} from './removespacepipe';

@Component({
    selector: 'friend',
    templateUrl: './app/Components/friend.component.html',
    styleUrls:['./app/Components/friend.component.css'],
    pipes:[RemoveSpaces]
})

export class FriendComponent {
  @Input() friend: Friend;
  
  activeCheckBox($event){
      // you can get current value using $event.value.target
      this.friend.isActive = !this.friend.isActive; 
  }
}