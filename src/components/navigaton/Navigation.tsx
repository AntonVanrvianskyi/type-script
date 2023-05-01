import React, {FC} from 'react';
import { NavLink} from "react-router-dom";

import './Navigation.css'
import {useSelector} from "react-redux";
import {IState} from "../../interfaces/state.interface";

const Navigation:FC = () => {

    return (
        <div className={'block-ul'} >
            <ul className={'ul'} >
            <li ><NavLink className={'li'} to={'cars'}>cars</NavLink></li>
            <li ><NavLink className={'li'} to={'todos'}>todos</NavLink></li>
            <li ><NavLink className={'li'} to={'albums'}>albums</NavLink></li>
            </ul>
        </div>
    );
};

export default Navigation;