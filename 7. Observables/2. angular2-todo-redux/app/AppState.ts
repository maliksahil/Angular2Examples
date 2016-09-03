import {Todo} from './BusinessObjects'
import {TodosState} from './Reducers/todo.reducer'

export interface AppState {
    todos:TodosState;
}
