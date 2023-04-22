import {IRes} from "../types/axios.response";
import {IPost} from "../interfaces/post.interface";
import {axiosService} from "./axios.service";
import {posts} from "../constants/urls";

const postService = {
    getById:(id:string):IRes<IPost>=>axiosService.get(`${posts.posts}/${id}`)
}
export {
    postService
}