import {IRes} from "../types";
import {ICar} from "../interfaces";
import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carService = {
    getAll:():IRes<ICar[]>=>axiosService.get(urls.cars.cars),
    create:(car:ICar):IRes<ICar>=>axiosService.post(urls.cars.cars,car),
    update:(id:number,car:ICar):IRes<ICar>=>axiosService.patch(urls.cars.byId(id),car),
    delete:(id:number):IRes<void>=>axiosService.delete(urls.cars.byId(id))
}

export {
    carService
}