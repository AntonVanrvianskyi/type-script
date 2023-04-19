import React, {useEffect, useState} from 'react';
import {IComment} from "../interfaces/Commenr-interface";
import {commentService} from "../services/Comment.service";
import CommentForm from "./Forms/CommentForm";
import Comment from "./Comment";

const Cooments = () => {
    const [comment, setComment] = useState<IComment[]>([]);
    useEffect(()=>{
        commentService.getAll().then(value => value.data).then(value => setComment(value))
    }, [])
    return (
        <div>
         <CommentForm setComment={setComment}/>

            {
                comment.map(value => <Comment key={value.id} comment={value}/>)
            }


        </div>
    );
};

export default Cooments;