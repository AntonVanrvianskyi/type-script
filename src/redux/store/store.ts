import {createStore, Store} from "redux";

import {IState} from "../../interfaces/state.interface";
import {IAction} from "../../interfaces/action.interface";
import {carReducer} from "../reducers";


export const store:Store<IState,IAction> = createStore(carReducer)