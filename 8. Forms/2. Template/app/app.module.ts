import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }     from '@angular/http';
import { FormsModule}    from '@angular/forms';

import { TodoComponent }  from './Components/todo.component';
import { TodosComponent }  from './Components/todos.component';
import {TodoService} from './Services/todo.service'

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule],
  declarations: [TodoComponent, TodosComponent],
  bootstrap: [TodosComponent],
  providers: [TodoService]
})
export class AppModule { }