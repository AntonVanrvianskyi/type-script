import {IStateTodos} from "../../../interfaces/todos.state.interface";
import {IAction} from "../../../interfaces/action.interface";

export const InitialTodoState:IStateTodos = {
    todos: []
}

export const todosReducer = (state=InitialTodoState, action:IAction)=>{
    return state
}