import {Component} from '@angular/core';
import {TodoComponent} from './todo.component';

@Component({
    selector: 'my-app',
    directives: [TodoComponent],
    template: `
  <div>
    <todo-component>
    </todo-component>
  </div>
  `
})
export class AppComponent {
}