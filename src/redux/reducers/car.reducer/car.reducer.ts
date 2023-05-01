import {IAction} from "../../../interfaces/action.interface";
import {IState} from "../../../interfaces/state.interface";
import {CAR_FOR_UPDATE_ACTION, DELETE_CAR, SET, SET_CAR_FOR_UPDATE, SHOW_FORM} from "../../actions";


 export const initialState:IState = {
    cars:[],
    showForm:false,
    carForUpdate: null,
    trigger:false
}


export const carReducer = (state=initialState, action:IAction) => {
    switch (action.type) {
        case SET :
            return{...state, cars: [...action.payload]}
        case SHOW_FORM:
            return {...state, showForm:!state.showForm}
        case SET_CAR_FOR_UPDATE:
            return {...state, carForUpdate:action.payload}
        case CAR_FOR_UPDATE_ACTION:
            return {...state, carForUpdate:null}
        case DELETE_CAR:
            return {...state, trigger:!state.trigger}
        default:
            return state
    }
}
