/* eslint-disable no-unused-vars */
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-325px)]'>
                <Outlet />
            </div>
            <Footer></Footer>

        </div>
    );
};

export default MainLayout;

