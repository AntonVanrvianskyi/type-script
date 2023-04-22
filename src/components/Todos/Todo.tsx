import React, {FC} from 'react';
import {ITodo} from "../../interfaces/todos.interface";
interface IProps {
        todo:ITodo
}
const Todo:FC<IProps> = ({todo}) => {
    const {userId,title,completed} = todo
    return (
        <div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>completed: {completed}</div>
        </div>
    );
};

export default Todo;