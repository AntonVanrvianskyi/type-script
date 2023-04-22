import React, {FC} from 'react';
import {IPost} from "../../interfaces/post.interface";
interface IProps {
    post:IPost
}
const Post:FC<IProps> = ({post}) => {
    const {id,title} = post
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    );
};

export default Post;