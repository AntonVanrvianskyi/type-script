import {IRes} from "../types/response.axios";
import {IComment} from "../interfaces/Commenr-interface";
import {axiosService} from "./axios.service";
import {urls} from "../urls/urls";

const commentService = {
    getAll:():IRes<IComment[]>=> axiosService.get(urls.comments),
    create:(comment:IComment):IRes<IComment> => axiosService.post(urls.comments, comment)
}
export {
    commentService
}