import React, {FC} from 'react';

import {Outlet} from "react-router-dom";
import Navigation from "../components/navigaton/Navigation";


const MainLayout:FC = () => {
    return (
        <div>
           <Navigation/>
            <Outlet/>
        </div>

    );
};

export default MainLayout;