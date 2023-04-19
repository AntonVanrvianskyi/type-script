import React, {FC} from 'react';
import {IUseState} from "../../types/useState";
import {IComment} from "../../interfaces/Commenr-interface";
import {useForm} from "react-hook-form";
import {commentService} from "../../services/Comment.service";
interface IProps {
    setComment:IUseState<IComment[]>
}
const CommentForm:FC<IProps> = ({setComment}) => {
    const {register,reset,handleSubmit} = useForm<IComment>();
    const save = async (comment:IComment) => {
      const{data} = await commentService.create(comment)
        setComment(prevState => [...prevState, data])
        reset()
    }
    return (
        <form onSubmit={handleSubmit(save)}>
                <input placeholder={'title'} {...register('title')}/>
            <input placeholder={'body'} {...register('body')}/>
            <button>Save</button>
        </form>
    );
};

export default CommentForm;