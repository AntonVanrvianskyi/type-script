import {IRes} from "../types/response.axios";
import {IUser} from "../interfaces/User-interface";
import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const userService = {
    getAll:():IRes<IUser[]> => axiosService.get(urls.users),
    create:(user:IUser):IRes<IUser> => axiosService.post(urls.users, user),
}

export {
    userService
}