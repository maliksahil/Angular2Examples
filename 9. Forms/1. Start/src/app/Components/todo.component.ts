import { Component, Input, Output,EventEmitter } from '@angular/core';
import {Todo} from '../BusinessObjects';
import {Observable, Subscriber} from 'rxjs/Rx';

@Component({
    selector: "todo-control",
    templateUrl: './app/Components/todo.component.html',
})

export class TodoComponent {
    @Input() todo:Todo
}