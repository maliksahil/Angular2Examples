import { Component, ViewChildren, QueryList } from '@angular/core';
import {FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, FormBuilder, FormGroup, Validators, FormArray} from '@angular/forms';
import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';

import {TodoService} from '../Services/todo.service'
import {Todo} from '../BusinessObjects'
import {TodoComponent} from '../Components/todo.component';

@Component({
    selector: 'todos',
    templateUrl: './app/Components/todos.component.html',
    providers: [TodoService, FormBuilder],
    directives: [FORM_DIRECTIVES, REACTIVE_FORM_DIRECTIVES, TodoComponent]
})


export class TodosComponent {
    private _todos: Observable<Todo[]>;
    public myForm: FormGroup;

    constructor(
        private _todoService: TodoService,
        private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            'todos': this._fb.array([])
        });

        this._todoService.newTodo.subscribe((todo) => {
            const control = <FormArray>this.myForm.controls['todos'];
            control.push(this.initTodoControl(todo));
        });

        this._todos = this._todoService.todos;
    }

    initTodoControl(todo: Todo) {
        var formGroup = this._fb.group({
            id: [todo.id],
            title: [todo.title, Validators.required]
        });
        formGroup.valueChanges.subscribe((todo) => {
            this._todoService.updateTodo(todo);
        });
        return formGroup;
    }

    addTodo(todo: Todo) {
        this._todoService.addTodo(todo);
    }

    removeTodo(todoFormGroup: FormGroup, i: number) {
        let deletedTodo: Todo = todoFormGroup.value;
        const control = <FormArray>this.myForm.controls['todos'];
        control.removeAt(i);
        this._todoService.removeTodo(deletedTodo);
    }

    onSubmit(formData: any) {
    }
}