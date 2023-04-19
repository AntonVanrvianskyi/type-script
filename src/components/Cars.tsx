import React, {useEffect, useState} from 'react';
import {ICar} from "../interfaces/car-interface";
import {carService} from "../services/car-service";
import Car from "./Car";
import CarForm from "./Forms/CarForm";

const Cars = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    const [onChange, setOnChange] = useState<boolean>(false);
    const [updateCar, setCarUpdate] = useState<ICar|null>(null)

    useEffect(()=>{
        carService.getAll().then(value => value.data).then(value => setCars(value))
    },[onChange])
    return (
        <div>
            <CarForm setOnChange={setOnChange} updateCar={updateCar} setCarUpdate={setCarUpdate}/>
            <hr/>
            {
                cars.map(car=><Car key={car.id} car={car} setCarUpdate={setCarUpdate}/>)
            }
        </div>
    );
};

export default Cars;