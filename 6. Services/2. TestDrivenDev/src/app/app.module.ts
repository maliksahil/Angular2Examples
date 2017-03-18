import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodosComponent } from './Components/todos.component';
import { TodoComponent } from './Components/todo.component';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, TodoComponent, TodosComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
