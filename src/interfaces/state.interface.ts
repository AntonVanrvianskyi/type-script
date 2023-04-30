import {ICar} from "./car.interface";

export interface IState{
    cars:ICar[]
    showForm:boolean
    carForUpdate:ICar|null
    trigger:boolean
}