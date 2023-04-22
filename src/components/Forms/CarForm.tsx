import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {ICar} from "../../interfaces/car-interface";
import {IUseState} from "../../types/useState";
import {carService} from "../../services/car-service";
interface IProps {
    setOnChange:IUseState<boolean>,
    updateCar:ICar|null,
    setCarUpdate:IUseState<ICar|null>
}
const CarForm:FC<IProps> = ({setOnChange,updateCar,setCarUpdate}) => {

    const {reset,register,handleSubmit, setValue} = useForm<ICar>()
    useEffect(()=>{
        if (updateCar){
                setValue('brand', updateCar.brand)
                setValue('year', updateCar.year)
                setValue('price', updateCar.price)
        }
    },[updateCar])
    const save:SubmitHandler<ICar> = async (car:ICar) => {
        await carService.create(car);
        setOnChange(prevState => !prevState);
        reset()
    }

    const update:SubmitHandler<ICar> = async (car:ICar) => {
        await carService.updateById(updateCar!.id, car)
        setOnChange(prevState => !prevState);
        reset();
        setCarUpdate(null)
    }

    return (
        <form onSubmit={handleSubmit(updateCar?update:save)}>
            <input type="text" placeholder={'brand'} {...register('brand')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <button>{updateCar?'Update':'Save'}</button>
        </form>
    );
};

export default CarForm;