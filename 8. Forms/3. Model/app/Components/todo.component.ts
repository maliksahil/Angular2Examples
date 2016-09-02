import { Component, Input, Output,EventEmitter } from '@angular/core';
import {Todo} from '../BusinessObjects';
import {Observable, Subscriber} from 'rxjs/Rx';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: "todo-control",
    templateUrl: './app/Components/todo.component.html',
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
})

export class TodoComponent {
    @Input('group')    
    public todoForm: FormGroup;
    private isEdit:boolean = false;

    toggleEdit($event) {
        this.isEdit = !this.isEdit;
        $event.srcElement.innerText = this.isEdit ? "Save" : "Edit";
    }
}