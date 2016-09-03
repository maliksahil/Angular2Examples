import {Component, provide} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {createStore, Store, StoreEnhancer} from 'redux';
import { default as reducer } from './Reducers/todo.reducer';
import { AppState } from './AppState';
import { AppStore } from './AppStore';
import {AppComponent} from './Components/app.component'

let devtools: StoreEnhancer<AppState> = window['devToolsExtension'] ? window['devToolsExtension']() : f => f;
let store: Store<AppState> = createStore<AppState>(reducer, devtools);

bootstrap(AppComponent, [
  provide(AppStore, { useValue: store }),
]).catch(err => console.error(err));