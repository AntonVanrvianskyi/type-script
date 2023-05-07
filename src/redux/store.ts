import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer, formSaveReducer} from "./slices/";
import {FormLoginReducer} from "./slices";

const rootReducer = combineReducers({
    cars:carReducer,
    formLogin:FormLoginReducer,
    formSave: formSaveReducer
})

const setupStore = () => configureStore({
    reducer:rootReducer
})
type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>
type AppDispatch =  AppStore['dispatch']

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
}