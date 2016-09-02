import { Component, ViewChildren, QueryList } from '@angular/core';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';

import {TodoService} from '../Services/todo.service'
import {Todo} from '../BusinessObjects'
import {TodoComponent} from '../Components/todo.component';

@Component({
    selector: 'todos',
    templateUrl: './app/Components/todos.component.html',
    providers: [TodoService],
    directives: [TodoComponent]
})


export class TodosComponent {
    private _todos: Observable<Todo[]>;

    constructor(private _todoService: TodoService) { }

    ngOnInit() {
        this._todos = this._todoService.todos;
    }
}