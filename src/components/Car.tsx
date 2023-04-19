import React, {FC} from 'react';
import {ICar} from "../interfaces/car-interface";
import {IUseState} from "../types/useState";
interface IProps {
    car:ICar,
    setCarUpdate:IUseState<ICar|null>
}
const Car: FC<IProps> = ({car,setCarUpdate} ) => {
    const {brand,price,year} = car
    return (
        <div>

            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>setCarUpdate(car)}>Update</button>

        </div>
    );
};

export default Car;