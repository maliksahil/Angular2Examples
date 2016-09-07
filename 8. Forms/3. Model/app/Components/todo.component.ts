import { Component, Input, Output,EventEmitter } from '@angular/core';
import {Todo} from '../BusinessObjects';
import {Observable, Subscriber} from 'rxjs/Rx';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: "todo-control",
    templateUrl: './app/Components/todo.component.html'
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