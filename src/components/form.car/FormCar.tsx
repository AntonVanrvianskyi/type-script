import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces/car.interface";
import './Form.css'
import {useDispatch, useSelector} from "react-redux";

import {carService} from "../../services/car.service";
import {CAR_FOR_UPDATE_ACTION, SHOW_FORM} from "../../redux";
import {RootStateType} from "../../types/root.state.type";

const FormCar:FC = () => {


    const {register,handleSubmit, setValue } = useForm<ICar>()
    const store = useSelector((state:RootStateType) =>state.cars.carForUpdate );
    const dispatch = useDispatch()


    useEffect(()=>{
        if (store){
            setValue("brand",store.brand)
            setValue("price",store.price)
            setValue("year",store.year)
        }
    },[setValue, store])
    const save = async (car:ICar)=>{
        await carService.create(car)
        dispatch({type:SHOW_FORM})
    }
    const update:SubmitHandler<ICar> = async (car) => {
        await carService.update(store.id, car)
        dispatch({type:SHOW_FORM})
        dispatch({type:CAR_FOR_UPDATE_ACTION})

    }
    return (

        <div className={'block-form'}>
            <div className={'container'}>
        <form className={'form'} onSubmit={handleSubmit(store?update:save)} >
            <input className={'input'} placeholder={'brand'} {...register('brand')}/>
            <input className={'input'} placeholder={'price'} {...register('price')}/>
            <input className={'input'} placeholder={'year'} {...register('year')}/>
            <button>{store?'Update':'Save'}</button>
        </form>
                <button className={'btn-cls'} onClick={()=>dispatch({type:SHOW_FORM})}>Close</button>
            </div>
        </div>

    );
};

export default FormCar;