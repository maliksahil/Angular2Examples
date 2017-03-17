import { Component, ViewChildren, QueryList } from '@angular/core';

import {Todo} from '../BusinessObjects'
import {TodoComponent} from '../Components/todo.component';

@Component({
    selector: 'todos',
    templateUrl: './app/Components/todos.component.html'
})


export class TodosComponent {
    @ViewChildren(TodoComponent) todoComponents: QueryList<TodoComponent>
    private _todos: Array<Todo> = [];
    private _lastTodo: Todo = null;

    private singleTodo: Todo =
    new Todo({ "id": 3, "title": "Get in lots of trouble", "isComplete": true })

    constructor() {
        this._todos.push(new Todo({ "id": 0, "title": "Steal donut truck", "isComplete": false }));
        this._todos.push(new Todo({ "id": 1, "title": "Speed on the freeway", "isComplete": false }));
        this._todos.push(new Todo({ "id": 2, "title": "Get caught by cop", "isComplete": false }));
    }

    selectedTodoChange(todo: Todo) {
        this._lastTodo = todo;
    }

    markAllComplete() {
        this.todoComponents.forEach(todoComponent => {
            todoComponent.markComplete();
        })
    }
}