import React, {useEffect, useState} from 'react';

import {IUser} from "../interfaces/User-interface";
import {userService} from "../services/user.service";
import User from "./User";
import UserForm from "./Forms/User.form";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);


    useEffect(()=>{
        userService.getAll().then(value => value.data).then(value => setUsers(value))
    },[])

    return (

        <div>
            <UserForm setUsers={setUsers} />
            <hr/>
            {
                users.map(user=><User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users ;