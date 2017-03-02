import { Injectable } from '@angular/core';
import {Observable, Subject, BehaviorSubject} from 'rxjs/Rx';
import {Http} from '@angular/http';

import {Todo} from '../BusinessObjects';

let allTodos: Todo[] = [];

interface ITodosOperation extends Function {
    (todo: Todo[]): Todo[];
}

@Injectable()
export class TodoService {
    // All Todos
    todos: Observable<Todo[]>;
    // Latest Todo
    newTodo: Subject<Todo> = new Subject<Todo>();
    // Receives changes that can be applied to all Todos
    updates: Subject<any> = new Subject<any>();
    // action stream
    create: Subject<Todo> = new Subject<Todo>();

    constructor(private _http: Http) {
        // Hydrate todos
        this._http.get('data/todos.json').subscribe(res => {
            allTodos = res.json();
            allTodos.forEach((todo) => {
                let toAddTodo = new Todo(todo);
                this.addTodo(toAddTodo);
            });
        });

        // watch the updates and accumulate operations on the todos
        this.todos = this.updates
            .scan((todos: Todo[], operation: ITodosOperation) => {
                return operation(todos);
            }, allTodos)
            .publishReplay(1).refCount();
        // We share the most recent list of todos across anyone who's interested in subscribing and cache the last known list of todos

        this.create.map(function (todo: Todo): ITodosOperation {
            return (todos: Todo[]) => {
                return todos.concat(todo);
            };
        }).subscribe(this.updates);

        this.newTodo.subscribe(this.create);
    }

    addTodo(todo: Todo): void {
        this.newTodo.next(todo);
    }

    updateTodo(todo: Todo): void {
        this.todos.subscribe((_todos: Todo[]) => {
            _todos.forEach((_todo) => {
                if (_todo.id === todo.id) {
                    _todo.title = todo.title
                    _todo.rowState = "UPDATED"
                };
            });
        });
    }

    // deletes
    delete: Subject<Todo> = new Subject<Todo>();
    removeTodo(todo: Todo) {
        // console.log(todo);
        this.todos.subscribe((_todos: Todo[]) => {
            _todos.forEach((_todo) => {
                if (_todo.id === todo.id) {
                    _todo.rowState = "DELETED";
                };
            });
        });
    }
}

// export var todosServiceInjectables: Array<any> = [
//     bind(TodoService).toClass(TodoService)
// ];