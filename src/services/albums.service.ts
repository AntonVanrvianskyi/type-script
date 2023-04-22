import {IRes} from "../types/axios.response";
import {IAlbums} from "../interfaces/albums.interface";
import {albums} from "../constants/urls";
import {axiosService} from "./axios.service";

const albumsService = {
    getAll:():IRes<IAlbums[]>=>axiosService.get(albums.albums)
}
export {
    albumsService
}