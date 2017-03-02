import {Component, ViewChild} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

import {Friend} from '../BusinessObjects';

@Component({
    selector: 'friends',
    templateUrl: './app/Components/friends.component.html'
})

export class FriendsComponent {
    friends:Friend[] = [];
    constructor(private _http:Http) {
        _http.get('data/data.json').subscribe(res => {
            this.friends = res.json();
        });
    }        
}