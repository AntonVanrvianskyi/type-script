import React, {FC} from 'react';
import {IComment} from "../interfaces/Commenr-interface";
interface IProps {
comment:IComment
}
const Comment:FC<IProps> = ({comment}) => {
    const {id,title,body} = comment
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
        </div>
    );
};

export default Comment;