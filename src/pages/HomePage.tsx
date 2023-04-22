import React, {FC} from 'react';
import {Link} from "react-router-dom";

const HomePage:FC = () => {
    return (
        <div>
            <ul>
                <li><Link to={'todos'}>todos</Link></li>
                <li><Link to={'albums'}>albums</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
            </ul>
        </div>
    );
};

export default HomePage;