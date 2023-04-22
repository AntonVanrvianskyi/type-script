import {IRes} from "../types/axios.response";
import {ITodo} from "../interfaces/todos.interface";
import {axiosService} from "./axios.service";
import {todos} from "../constants/urls";

const todosService = {
    getAll:():IRes<ITodo[]>=>axiosService.get(todos.todos)
}
export {
    todosService
}