import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../BusinessObjects';

@Component({
    selector: "todo-control",
    templateUrl: './app/Components/todo.component.html',
})

export class TodoComponent {
    @Input() todo: Todo
    @Output() todoChange = new EventEmitter<Todo>()

    checkBoxSelected() {
        this.todo.isComplete = !this.todo.isComplete;
        this.todoChange.emit(this.todo);
    }

    markComplete() {
        this.todo.isComplete = true;
    }
}