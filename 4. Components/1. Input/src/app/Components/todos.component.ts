import { Component} from '@angular/core';

import {Todo} from '../BusinessObjects'


@Component({
    selector: 'todos',
    templateUrl: './app/Components/todos.component.html'
})


export class TodosComponent {
    private _todos: Array<Todo> = [];

    constructor() {
        this._todos.push(new Todo({ "id": 0, "title": "Steal donut truck" }));
        this._todos.push(new Todo({ "id": 1, "title": "Speed on the freeway" }));
        this._todos.push(new Todo({ "id": 2, "title": "Get caught by cop" }));
    }
}