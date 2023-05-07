import React, {FC} from 'react';

import {ICar} from "../../interfaces";
import './Car.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carAction, formSaveAction} from "../../redux";

interface IProps {
    car:ICar
}
const Car:FC<IProps> = ({car}) => {
    const {id,year,brand,price} = car


    const dispatch = useAppDispatch();
    const {users} = useAppSelector(state => state.formLogin)

    const clickCarForUpdate = (car:ICar) => {
        dispatch(formSaveAction.trigger())
        dispatch(carAction.setCarForUpdate(car))

    }
    const deleteCar = async () => {
      await dispatch(formSaveAction.deleteCar({id}))
    }

    return (
        <div className='container-car'>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>
            <div className='btn-container'>
            <button disabled={!users.length} className='btn' onClick={()=>clickCarForUpdate(car)}>Update</button>
            <button disabled={!users.length} className='btn' onClick={deleteCar}>Delete</button>
            </div>
        </div>
    );
};

export default Car;