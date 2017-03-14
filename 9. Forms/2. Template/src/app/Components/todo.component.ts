import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../BusinessObjects';
import {Observable, Subscriber} from 'rxjs/Rx';

@Component({
    selector: "todo-control",
    templateUrl: './app/Components/todo.component.html'
})

export class TodoComponent {
    @Input() todo: Todo;
    @Output() todoChange: EventEmitter<Todo> = new EventEmitter<Todo>();

    private isEdit: boolean = false;
    toggleEdit($event) {
        this.isEdit = !this.isEdit;
        $event.srcElement.innerText = this.isEdit ? "Save" : "Edit";
        this.todoChange.emit(this.todo);
    }
}