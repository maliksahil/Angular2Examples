import { Injectable } from '@angular/core';
import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';
import {Http} from '@angular/http';

import {Todo} from '../BusinessObjects';

@Injectable()
export class TodoService {
    private _todos: Subject<Todo[]> = new Subject<Todo[]>();
    todos: Observable<Todo[]> = this._todos.asObservable();

    constructor(private _http: Http) {
        this._http.get('data/todos.json').subscribe(res => {
            this._todos.next(res.json());
        });
    }
}