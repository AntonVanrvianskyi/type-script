import React, {FC} from 'react';
import {IAlbums} from "../../interfaces/albums.interface";
interface IProps {
    album:IAlbums
}
const Album:FC<IProps> = ({album}) => {
    const {userId,title} = album
    return (
        <div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
        </div>
    );
};

export default Album;