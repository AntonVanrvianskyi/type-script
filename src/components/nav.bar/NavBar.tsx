import React, {FC} from 'react';
import './Nav.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import { formSaveAction} from "../../redux";
import {useNavigate} from "react-router-dom";

const NavBar:FC = () => {
    const { users } = useAppSelector(state => state.formLogin)
    const dispatch = useAppDispatch()
    const clickAddCar = () => {
      dispatch(formSaveAction.trigger())
    }

    const navigate = useNavigate()
    const showFormLogin = () => {

        navigate('form')
    }
    return (
        <div className='container' >
            <div className='container-button'>
                <button disabled={!users.length} className='button' onClick={clickAddCar}>Add Car</button>
                <button className='button' onClick={showFormLogin}>Sign In</button>
                <button className='button' onClick={showFormLogin}>Sign Up</button>

            </div>

        </div>
    );
};

export default NavBar;