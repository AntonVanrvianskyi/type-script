import {combineReducers, createStore, Store} from "redux";

import {IState} from "../../interfaces/state.interface";
import {IAction} from "../../interfaces/action.interface";
import {carReducer, } from "../reducers";
import {RootStateType} from "../../types/root.state.type";
import {RootAction} from "../../types/root.action.type";
import {todosReducer} from "../reducers/todos.reducer";




const rootReducer = combineReducers<RootStateType, RootAction>({
    cars:carReducer,
    todos:todosReducer
})



export const store:Store<IState,IAction> = createStore(rootReducer)