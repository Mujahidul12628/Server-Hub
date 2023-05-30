import React from 'react';
import Menubar from '../../Component/Menubar/Menubar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <div>
                <Menubar></Menubar>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default LoginLayout;