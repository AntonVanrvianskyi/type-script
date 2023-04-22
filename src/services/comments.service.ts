import {IRes} from "../types/axios.response";
import {IComment} from "../interfaces/comments.interface";
import {axiosService} from "./axios.service";
import {comments} from "../constants/urls";

const commentsService = {
    getAll:():IRes<IComment[]>=>axiosService.get(comments.comments)
}
export {
    commentsService
}