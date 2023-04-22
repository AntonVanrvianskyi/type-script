import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../../interfaces/todos.interface";
import {todosService} from "../../services/todos.service";
import Todo from "./Todo";

const Todos:FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(()=>{
        todosService.getAll().then(value => value.data).then(value => setTodos(value));

    },[])
    return (
        <div>
            {
                todos.map(todo=><Todo key={todo.id} todo={todo}/>)
            }
        </div>
    );
};

export default Todos;