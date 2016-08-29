import { Component } from '@angular/core';
import {TodosComponent} from './Components/todos.component';

@Component({
    selector: 'my-app',
    template: '<h1>Todos</h1><todos></todos>',
    directives: [TodosComponent]
})
export class AppComponent { }