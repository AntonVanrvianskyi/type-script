import React, {FC} from 'react';
import {ICar} from "../interfaces/car-interface";
import {IUseState} from "../types/useState";
import {carService} from "../services/car-service";
interface IProps {
    car:ICar,
    setCarUpdate:IUseState<ICar|null>
    setOnChange:IUseState<boolean>
}
const Car: FC<IProps> = ({car,setCarUpdate,setOnChange} ) => {
    const {id,brand,price,year} = car;

    const del = async (id:number)=>{
        await carService.delete(id);
        setOnChange(prevState => !prevState)
    }

    return (
        <div>

            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setCarUpdate(car)}>Update</button>
            <button onClick={()=>del(id)}>Delete</button>

        </div>
    );
};

export default Car;