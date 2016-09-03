import {Todo} from '../BusinessObjects'
import {Action, ActionCreator} from 'redux';

export const GET_TODOS = '[Todo] Get Current';
export interface GetTodosAction extends Action {
    todos: Todo[];
}

export const getCurrentTodos: ActionCreator<GetTodosAction> =
    (todos) => ({
        type: GET_TODOS,
        todos: todos
    })