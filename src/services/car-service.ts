import {ICar} from "../interfaces/car-interface";
import {axiosCarService, } from "./axios.service";
import {urlsCar} from "../urls/urls";
import {IRes} from "../types/response.axios";


const carService = {
    getAll:():IRes<ICar[]>=>axiosCarService.get(urlsCar.cars),
    create:(car:ICar):IRes<ICar>=> axiosCarService.post(urlsCar.cars, car),
    delete:(id:number):IRes<void>=>axiosCarService.delete(`${urlsCar.cars}/${id}`),
    updateById:(id:number,car:ICar):IRes<ICar>=>axiosCarService.patch(`${urlsCar.cars}/${id}`,car)
}
export {
    carService
}