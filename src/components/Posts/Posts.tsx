import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IPost} from "../../interfaces/post.interface";
import {postService} from "../../services/post.service";
import Post from "./Post";



const Posts:FC = () => {
    const {postId} = useParams();
    const [post, setPost] = useState<IPost|null>(null);
    useEffect(()=>{
        postService.getById(postId).then(value => value.data).then(value => setPost(value))
    },[postId])
    return (
        <div>
            {
                post && <Post key={post.id} post={post}/>
            }
        </div>
    );
};

export default Posts;