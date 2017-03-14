import { Friend } from './friend';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class FriendsService {
    friends: Friend[] = [];
    constructor(private _http: Http) { }

    getFriends(id?: string) {
        return this._http.get('data/data.json')
            .map((response: Response) => {
                let friends = <Friend[]>response.json();
                if (!id) return friends;
                return friends.filter(
                    v => v._id.toLowerCase().includes(id.toLowerCase()))
            })
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}