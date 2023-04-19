import React, {FC} from 'react';

import {IUser} from "../interfaces/User-interface";
interface IProps{
    user:IUser
}

const User: FC<IProps> = ({user}) => {
    const {id,email,name} = user
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
        </div>
    );
};

export default User;
