import {IRes} from "../types/axios.type";
import {ICar} from "../interfaces/car.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";



const carService = {
    getAll:():IRes<ICar[]>=>axiosService.get(urls.cars),
    update:(id:number,car:ICar):IRes<ICar>=>axiosService.patch(`${urls.cars}/${id}`,car),
    create:(car:ICar):IRes<ICar>=>axiosService.post(urls.cars, car),
    delete:(id:number):IRes<void>=>axiosService.delete(`${urls.cars}/${id}`)
}
export {
    carService
}