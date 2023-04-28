import {IRes} from "../types/axios.type";
import {ICar} from "../interfaces/car.interface";
import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const carService = {
    getAll:():IRes<ICar[]>=>axiosService.get(urls.cars)
}
export {
    carService
}