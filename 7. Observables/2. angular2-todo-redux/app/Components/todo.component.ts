import {Component, Inject} from '@angular/core';
import { Store } from 'redux';
import { AppStore } from '../AppStore';
import { AppState } from '../AppState';
import * as TodoActions from '../Actions/todo.actions';
import {Todo} from '../BusinessObjects'

@Component({
    selector: 'todo-component',
    templateUrl:'./app/Components/todo.component.html'
})

export class TodoComponent {
    private _todos: Todo[] = [];
    constructor( @Inject(AppStore) private store: Store<AppState>) {
        store.dispatch(TodoActions.getCurrentTodos());
        this._todos = store.getState().todos.todos;
    }
}