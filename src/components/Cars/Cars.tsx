import React, {FC, useEffect} from 'react';

import './Cars.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carAction} from "../../redux";
import Car from "../Car/Car";

const Cars:FC = () => {
     const {cars} = useAppSelector(state => state.cars)
    const {reloadState} = useAppSelector(state => state.formSave)

    const dispatch = useAppDispatch();

     useEffect(()=>{
         dispatch(carAction.getAll())
     },[dispatch, reloadState])
    return (
        <div className='container-cars'>
            {
                cars.map(car=><Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export default Cars;