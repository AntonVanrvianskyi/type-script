import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces";
import '../form.login/Form.login.css'
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carAction, formSaveAction} from "../../redux";
const FormSaveCar:FC = () => {
    const {register,  handleSubmit, setValue } = useForm<ICar>();
    const {carForUpdate} = useAppSelector(state => state.cars)
    const dispatch = useAppDispatch();
    
    const clickClose = () => {
      dispatch(formSaveAction.trigger())
        dispatch(carAction.nullCarForUpdate())
    }
    useEffect(()=>{
        if (carForUpdate){
            setValue('brand',carForUpdate.brand)
            setValue('price',carForUpdate.price)
            setValue('year',carForUpdate.year)
        }
    },[carForUpdate,setValue])
    const update:SubmitHandler<ICar> = async (car) => {
      await dispatch(formSaveAction.update({id:carForUpdate.id, car}))

        dispatch(formSaveAction.trigger())
        dispatch(carAction.nullCarForUpdate())

    }
    const save:SubmitHandler<ICar> = async (car) => {
        await dispatch(formSaveAction.create({car}))

        dispatch(formSaveAction.trigger())

    }
    return (
        <div className='wrap'>
            <div className='wrap-two'></div>
            <div className='container-form'>
                <form className='form' onSubmit={handleSubmit(carForUpdate?update:save)}>
                    <label>Brand:</label>
                    <input className='input' placeholder={'brand'} {...register('brand')}/>

                    <label>Price:</label>
                    <input className='input' placeholder={'price'} {...register('price')}/>

                    <label>Year:</label>
                    <input  className='input' placeholder={'year'} {...register('year')}/>

                    <div className='container-button-1'>
                        <button className='button'>{carForUpdate?'Update':'Save'}</button>
                        <button className='close' onClick={clickClose}>Close</button>

                    </div>
                </form>
                {/*<div>*/}
                {/*    <button className='button'>Login in</button>*/}
                {/*</div>*/}

            </div>
        </div>
    );
};

export default FormSaveCar;