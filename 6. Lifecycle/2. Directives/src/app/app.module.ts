import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './Components/todos.component';
import { TodoComponent } from './Components/todo.component';

import { HighlightDirective } from './Directives/highlight.directive';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, TodoComponent, TodosComponent, HighlightDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }