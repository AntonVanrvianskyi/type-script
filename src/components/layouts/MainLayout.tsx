import React, {FC} from 'react';
import NavBar from "../nav.bar/NavBar";
import FormSaveCar from "../form.saveCar/FormSaveCar";
import CarPage from "../../pages/CarPage";
import {useAppSelector} from "../../hooks";

const MainLayout:FC = () => {
    const {trigger} = useAppSelector(state => state.formSave)
    return (
        <div>
            <NavBar/>

            {
                trigger?<FormSaveCar/>:<CarPage/>
            }
        </div>
    );
};

export default MainLayout;