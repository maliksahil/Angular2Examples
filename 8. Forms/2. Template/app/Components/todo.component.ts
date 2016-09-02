import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from '../BusinessObjects';
import {Observable, Subscriber} from 'rxjs/Rx';
import {FORM_DIRECTIVES} from '@angular/forms'

@Component({
    selector: "todo-control",
    templateUrl: './app/Components/todo.component.html',
    directives: [FORM_DIRECTIVES]
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