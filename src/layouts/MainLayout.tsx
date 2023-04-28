import React, {FC} from 'react';

import {Link} from "react-router-dom";


const MainLayout:FC = () => {
    return (
        <div>
            <Link to={'cars'}>cars</Link>
            <Link to={'todos'}>todos</Link>
            <Link to={'albums'}>albums</Link>

        </div>

    );
};

export default MainLayout;