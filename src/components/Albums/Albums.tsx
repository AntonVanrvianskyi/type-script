import React, {FC, useEffect, useState} from 'react';
import {IAlbums} from "../../interfaces/albums.interface";
import {albumsService} from "../../services/albums.service";
import Album from "./Album";

const Albums:FC = () => {
    const [albums, setAlbums] = useState<IAlbums[]>([]);
    useEffect(()=>{
        albumsService.getAll().then(value => value.data).then(value => setAlbums(value))
    },[])
    return (
        <div>
            {
                albums.map(album=><Album key={album.id} album={album}/>)
            }

        </div>
    );
};

export default Albums;