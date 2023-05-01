import React, {FC} from 'react';
import {ICar} from "../../interfaces/car.interface";

import './Car.css'
import {useDispatch} from "react-redux";
import {carReducer, DELETE_CAR, SET_CAR_FOR_UPDATE, SHOW_FORM} from "../../redux";
import {carService} from "../../services/car.service";


interface IProps {
    car:ICar
}
const Car:FC<IProps> = ({car}) => {


    const dispatch = useDispatch()

    const clickUpdate = (car:ICar) => {
      dispatch({type:SHOW_FORM})
        dispatch({type:SET_CAR_FOR_UPDATE, payload:car })
    }
    const clickSave = () => {
      dispatch({type:SHOW_FORM})
    }
    const deleteCar = async (car:ICar) => {
      await carService.delete(car.id)
        dispatch({type:DELETE_CAR})
    }
    const {brand,year,price} = car
    return (
        <div className={'car'}>
            <div>brand: {brand}</div>
            <div>year: {year}</div>
            <div>price: {price}</div>

            <div className={'button'}>
                <button onClick={()=>clickUpdate(car)}>Update</button>
                <button onClick={()=>clickSave()}>Save</button>
               <button onClick={()=>deleteCar(car)}>Delete</button>
            </div>

        </div>
    );
};

export default Car;