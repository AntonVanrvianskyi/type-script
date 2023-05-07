import {ICar} from "../../interfaces";
import {createAsyncThunk, createSlice ,isFulfilled} from "@reduxjs/toolkit";
import {carService} from "../../services/car.service";

interface ISave {
    trigger: boolean,
    reloadState : boolean

}
const initialState:ISave = {

    trigger:false,
    reloadState:false
}
const update = createAsyncThunk<void,{car:ICar, id:number}>(
    'formSave/update',
    async ({car,id})=>{
        await carService.update(id,car)
    }
)
const create = createAsyncThunk<void,{car:ICar}>(
    'formSave/create',
    async ({car})=>{
        await carService.create(car)
    }
)
const deleteCar = createAsyncThunk<void,{id:number}>(
    'formSave/deleteCar',
    async ({id})=>{
        await carService.delete(id)
    }
)
const slice = createSlice({
    name:'formSave',
    initialState,
    reducers:{
        trigger:state => {
            state.trigger = !state.trigger

        }
    },
    extraReducers:builder => {
        builder
            .addMatcher(isFulfilled(create,update,deleteCar),state => {
                state.reloadState = !state.reloadState
            })

    }
})
const {reducer:formSaveReducer, actions} = slice;

const formSaveAction = {
    ...actions,
    update,
    create,
    deleteCar
}
export {
    formSaveReducer,
    formSaveAction
}
