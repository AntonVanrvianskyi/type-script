import React, {FC} from 'react';
import Cars from "../components/Cars/Cars";
import {useSelector} from "react-redux";
import {IState} from "../interfaces/state.interface";
import FormCar from "../components/form.car/FormCar";


const CarsPage:FC = () => {

    return (
        <div >
           <Cars/>

        </div>
    );
};

export default CarsPage;