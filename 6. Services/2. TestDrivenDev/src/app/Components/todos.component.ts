import { Component} from '@angular/core';

import {Todo} from '../BusinessObjects'
import {TodoService} from '../Services/todo.service';

@Component({
    selector: 'todos',
    // template: `
    // <div *ngFor="let todo of _todos">
    //     <div>
    //         <todo-control [todo]="todo"></todo-control>
    //     </div>
    // </div>    
    // `,
    templateUrl: './todos.component.html',
    providers: [TodoService]
})


export class TodosComponent {
    private _todos: Array<Todo> = [];

    constructor(private _todoService:TodoService) {
        this._todoService.getTodos().then(response => {
            this._todos = response.json();
        });
    }
}