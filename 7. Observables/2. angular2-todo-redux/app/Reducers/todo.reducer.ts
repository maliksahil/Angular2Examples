import { Reducer, Action, combineReducers } from 'redux';
import { AppState } from '../AppState';
import * as TodoActions from '../Actions/todo.actions'

import {Todo} from '../BusinessObjects'


export interface TodosState {
    todos: Todo[]
}

const initialState: TodosState = {
    todos: []
}

export const TodosReducer: Reducer<TodosState> =
    function (state: TodosState = initialState, action: Action): TodosState {
        switch (action.type) {
            case TodoActions.GET_TODOS:
                const todos: Todo[] = (<TodoActions.GetTodosAction>action).todos;
                var newTodos = Array.prototype.concat(initialState.todos, [
                    {
                        "id": 0,
                        "title": "Steal donut truck",
                        "details": [
                            {
                                "key": "TruckColor",
                                "value": "White"
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "title": "Speed on the freeway",
                        "details": [
                            {
                                "key": "Speed",
                                "value": 90
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Get caught by cop",
                        "details": [
                            {
                                "key": "OfferDonut",
                                "value": true
                            }
                        ]
                    }
                ]);
                return {
                    todos: newTodos
                }
            default:
                return state;
        }
    }


const rootReducer: Reducer<AppState> = combineReducers<AppState>({
    todos: TodosReducer
});

export default rootReducer;