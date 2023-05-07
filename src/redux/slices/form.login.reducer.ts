import {createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../interfaces";
interface IFormState {
    approved:boolean,
    users:IUser[],

}
const initialState:IFormState = {
    approved:false,
    users:[],

}


const slice = createSlice({
    name:'formLoginSlice',
    initialState,
    reducers:{
        showFormLogin:state => {
            state.approved = !state.approved
        },
        setUsers: (state, action) => {
            state.users = [...state.users,action.payload]
        }


    }
})

const {reducer:FormLoginReducer, actions} = slice;

const formLoginAction = {
    ...actions
}
export {
    FormLoginReducer,
    formLoginAction
}