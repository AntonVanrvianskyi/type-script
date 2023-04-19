import axios from "axios";
import {baseURL, carURL} from "../urls/urls";

const axiosService = axios.create({baseURL});
const axiosCarService = axios.create({baseURL:carURL})
export {
    axiosService,
    axiosCarService
}