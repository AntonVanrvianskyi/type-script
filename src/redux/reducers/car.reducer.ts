import {IAction} from "../../interfaces/action.interface";
import {IState} from "../../interfaces/state.interface";
import {SET} from "../actions";


const initialState:IState = {
    cars:[]
}

export const carReducer = (state=initialState, action:IAction) => {
    switch (action.type) {
        case SET :
            return{...state, cars: [...action.payload]}
    }
}
