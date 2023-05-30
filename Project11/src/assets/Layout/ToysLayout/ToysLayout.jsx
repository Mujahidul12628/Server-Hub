import React from 'react';
import { Outlet } from 'react-router-dom';
import Menubar from '../../Component/Menubar/Menubar';

const ToysLayout = () => {
    return (
        <div>
            <div>
                <Outlet></Outlet>
                <Menubar></Menubar>
            </div>
        </div>
    );
};

export default ToysLayout;