import React, {FC} from 'react';
import {IComment} from "../../interfaces/comments.interface";
import {useNavigate} from "react-router-dom";
interface IProps {
    comment:IComment
}
const Comment:FC<IProps> = ({comment}) => {
    const {postId,name,email} = comment
    const navigate = useNavigate()
    return (
        <div>
            <div>postId: {postId}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <button onClick={()=>navigate(postId.toString())}>Get Post</button>
        </div>
    );
};

export default Comment;