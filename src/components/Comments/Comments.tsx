import React, {FC, useEffect, useState} from 'react';
import {IComment} from "../../interfaces/comments.interface";
import {commentsService} from "../../services/comments.service";
import Comment from "./Comment";
import {Outlet} from "react-router-dom";

const Comments:FC = () => {
    const [comments, setComments] = useState<IComment[]>([]);
    useEffect(()=>{
        commentsService.getAll().then(value => value.data).then(value => setComments(value))
    },[])
    return (
        <div>
            <Outlet/>
            {
                comments.map(comment=><Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export default Comments;