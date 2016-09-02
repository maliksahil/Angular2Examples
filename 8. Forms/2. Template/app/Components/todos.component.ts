import { Component, ViewChildren, QueryList } from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/forms';
import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';

import {TodoService} from '../Services/todo.service'
import {Todo} from '../BusinessObjects'
import {TodoComponent} from '../Components/todo.component';

@Component({
    selector: 'todos',
    templateUrl: './app/Components/todos.component.html',
    providers: [TodoService],
    directives: [TodoComponent, FORM_DIRECTIVES]
})


export class TodosComponent {
    private _todos: Observable<Todo[]>;

    constructor(private _todoService: TodoService) { }

    ngOnInit() {
        this._todos = this._todoService.todos;
    }

    onSubmit(formData:any) {
        console.log(formData);
    }

    updateTodo(todo:Todo) {
        this._todoService.updateTodo(todo);
    }
}