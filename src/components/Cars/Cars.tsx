import React, {FC, useEffect} from 'react';

import {ICar} from "../../interfaces/car.interface";
import {useDispatch, useSelector} from "react-redux";
import {IState} from "../../interfaces/state.interface";
import {carService} from "../../services/car.service";
import {SET} from "../../redux";
import Car from "../Car/Car";
import './Cars.css'
import FormCar from "../form.car/FormCar";
import {RootStateType} from "../../types/root.state.type";
import {RootAction} from "../../types/root.action.type";


const Cars:FC = () => {
    const store = useSelector((state:RootStateType) =>state.cars.cars ) as ICar[];
    const storeShow = useSelector((state:RootStateType) => state.cars.showForm)
    const trigger = useSelector((state:RootStateType) =>state.cars.trigger )

    const dispatch = useDispatch()

    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => dispatch({type:SET, payload:value}))
    },[dispatch, storeShow, trigger])
    return (
        <div className={'carsPage'}>
            {
                store.map(car => <Car key={car.id} car={car}/>)
            }
            {/*{*/}
            {/*    storeShow && <FormCar/>*/}
            {/*}*/}
        </div>
    );
};

export default Cars;