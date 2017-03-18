import { Component, Input } from '@angular/core';
import {Todo} from '../BusinessObjects';

@Component({
    selector: "todo-control",
    templateUrl: './todo.component.html',
})

export class TodoComponent {
    @Input() todo: Todo;
}
