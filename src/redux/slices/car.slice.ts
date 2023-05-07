import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICar, IState} from "../../interfaces";
import {carService} from "../../services/car.service";


const initialState:IState={
    cars:[],
    carForUpdate:null
}

const getAll = createAsyncThunk<ICar[], void>(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
       const {data} = await carService.getAll();
       return data
    }
)
const slice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setCarForUpdate:(state, action) => {
            state.carForUpdate = action.payload
        },
        nullCarForUpdate:state => {
            state.carForUpdate = null
        }
    },
    extraReducers:builder => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
    }
})

const {reducer:carReducer, actions} = slice
const carAction = {
    ...actions,
    getAll
}

export {
    carAction,
    carReducer
}