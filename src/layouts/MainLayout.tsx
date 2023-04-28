import React, {FC} from 'react';

import {Link, Outlet} from "react-router-dom";


const MainLayout:FC = () => {
    return (
        <div>
            <Link to={'cars'}>cars</Link>
            <Outlet/>
        </div>

    );
};

export default MainLayout;