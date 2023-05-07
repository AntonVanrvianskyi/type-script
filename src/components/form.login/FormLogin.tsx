import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IUser} from "../../interfaces";
import './Form.login.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {formLoginAction} from "../../redux/slices/form.login.reducer";
import {useNavigate} from "react-router-dom";
const FormLogin = () => {

    const {register, reset, handleSubmit } = useForm<IUser>();
   const {users} = useAppSelector(state => state.formLogin)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()



    const login:SubmitHandler<IUser> = (user) => {
        navigate('/')
        dispatch(formLoginAction.setUsers(user))
        reset()
    }
    console.log(users)
    return (
        <div className='wrap'>
            <div className='wrap-two'></div>
        <div className='container-form'>
            <form className='form' onSubmit={handleSubmit(login)}>
                <label>Name:</label>
                <input className='input' placeholder={'name'} {...register('name')}/>

                <label>Email:</label>
                <input className='input' placeholder={'email'} {...register('email')}/>

                <label>Password:</label>
                <input type={"password"} className='input' placeholder={'password'} {...register('password')}/>

                <div className='container-button'>
                <button className='button' >{users.length?'Login in':'Register'}</button>

                </div>
            </form>


        </div>
        </div>
    );
};

export default FormLogin;