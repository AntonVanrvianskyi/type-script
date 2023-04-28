import React, {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carService} from "../services/car.service";
import {SET} from "../redux";
import {ICar} from "../interfaces/car.interface";
import {IState} from "../interfaces/state.interface";


const CarsPage:FC = () => {

        const store = useSelector((state:IState) => state.cars) as ICar[]
        const dispatch = useDispatch()
        useEffect(()=>{
            carService.getAll().then(value => value.data).then(value => dispatch({type:SET, payload:value}))
        },[dispatch])
    return (
        <div>
            {
                store.map(value => <div key={value.id}>{value.brand}</div>)
            }
        </div>
    );
};

export default CarsPage;