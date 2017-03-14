import { Component, Input } from '@angular/core';
import {Todo} from '../BusinessObjects';
import {Observable, Subject} from 'rxjs/Rx';

@Component({
    selector: "todo-control",
    templateUrl: './app/Components/todo.component.html',
})

export class TodoComponent {
    @Input() todo: Todo

    displayMessages: Array<string> = [];
    private _statusMessages: Subject<string> = new Subject<string>();
    statusMessages: Observable<string> = this._statusMessages.asObservable();
    

    constructor() {
        this.statusMessages.subscribe(message => {
            this.displayMessages.push(message);
        });

        this._statusMessages.next("constructor");
    }

    ngOnChanges() {
        this._statusMessages.next("ngOnChanges");
    }
    ngOnInit() {
        this._statusMessages.next("ngOnInit");
    }
    ngDoCheck() {
        this._statusMessages.next("ngDoCheck");
    }
    ngAfterContentInit() {
        this._statusMessages.next("ngAfterContentInit");
    }
    ngAfterContentChecked() {
        this._statusMessages.next("ngAfterContentChecked");
    }
    ngAfterViewInit() {
        this._statusMessages.next("ngAfterViewInit");
    }
    ngAfterViewChecked() {
        this._statusMessages.next("ngAfterViewChecked");
    }
    ngOnDestroy() {
        this._statusMessages.next("ngOnDestroy");
    }
}