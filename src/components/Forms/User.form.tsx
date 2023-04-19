import React, {FC} from 'react';
import {useForm} from "react-hook-form";

import {IUser} from "../../interfaces/User-interface";
import {IUseState} from "../../types/useState";
import {userService} from "../../services/user.service";

interface IProps{
    setUsers:IUseState<IUser[]>
}
const UserForm:FC<IProps> = ({setUsers}) => {
    const {register,handleSubmit,reset} = useForm<IUser>()

    const save = async (user:IUser) => {
       const {data} = await userService.create(user);
        setUsers((prev)=>[...prev, data]);
        reset()
    }

    return (
        <form onSubmit={handleSubmit(save)}>
            <input placeholder={'name'} {...register('name')}/>
            <input placeholder={'email'} {...register('email')}/>
            <button>Save</button>
        </form>
    );
};

export default UserForm;