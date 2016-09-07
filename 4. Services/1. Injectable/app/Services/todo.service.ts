import { Injectable } from '@angular/core';
import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Todo} from '../BusinessObjects';

@Injectable()
export class TodoService {
    private _todos: Subject<Todo[]> = new Subject<Todo[]>();
    todos: Observable<Todo[]> = this._todos.asObservable();

    //  constructor (@Inject(Http) _http: Http) {
    constructor(private _http: Http) { }

    getTodos(): Promise<Response> {
        return this._http.get('data/todos.json').toPromise();
    }
}