import {ICar} from "./car.interface";


export interface IAction{
    type:string,
    payload:ICar[]
}