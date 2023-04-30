import React, {FC, useEffect} from 'react';

import {ICar} from "../../interfaces/car.interface";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../interfaces/state.interface";
import {carService} from "../../services/car.service";
import {SET} from "../../redux";
import Car from "../Car/Car";
import './Cars.css'
import Form from "../form/Form";


const Cars:FC = () => {
    const store = useSelector((state:IState) => state.cars) as ICar[];
    const storeShow = useSelector((state:IState) => state.showForm)
    const trigger = useSelector((state:IState) =>state.trigger )

    const dispatch = useDispatch()

    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => dispatch({type:SET, payload:value}))
    },[dispatch, storeShow, trigger])
    return (
        <div className={'carsPage'}>
            {
                store.map(car => <Car key={car.id} car={car}/>)
            }
            {
                storeShow && <Form/>
            }
        </div>
    );
};

export default Cars;