import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent }  from './Components/app.component';
import {TodoComponent} from './Components/todo.component';

import {createStore, Store, StoreEnhancer} from 'redux';
import  * as reducer from './Reducers/todo.reducer';
import { AppState } from './AppState';
import { AppStore } from './AppStore';


let devtools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;
let store: Store<AppState> = createStore<AppState>(reducer.default, devtools);

@NgModule({
    imports: [BrowserModule, HttpModule],        
    declarations: [AppComponent, TodoComponent],
    providers: [{ provide: AppStore, useFactory: () => store }],
    bootstrap: [AppComponent]
})
export class AppModule { }