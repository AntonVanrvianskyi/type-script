import React, {FC} from 'react';

import {Outlet} from "react-router-dom";
import Navigation from "../components/navigaton/Navigation";
import FormCar from "../components/form.car/FormCar";
import {useSelector} from "react-redux";
import {IState} from "../interfaces/state.interface";


const MainLayout:FC = () => {
    const storeShow = useSelector((state:IState) => state.showForm)
    return (
        <div>
           <Navigation/>
            <Outlet/>
            {
                storeShow && <FormCar/>
            }
        </div>

    );
};

export default MainLayout;