/* eslint-disable react/jsx-no-undef */
import React from 'react';
import error from '../../images/error.png'
import { Link } from 'react-router-dom';
import './Error404.css'
import DynamicTittle from '../Hook/DynamicTittle';

const Error404 = () => {
    DynamicTittle('404')
    return (
        <div className='w-full max-w-7xl mx-auto mt-10 mb-10 p-5 md:p-0'>

            <img className='h-full md:h-[40%] w-full md:w-[40%] mx-auto' src={error} alt="" />

            <div className='text-center'>
                <button className="mt-6 px-6 py-3  text-white hover:font-semibold rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 button-bg">
                    <Link to='/'>Back to Homepage</Link>
                </button>
            </div>

        </div>
    );
};

export default Error404;

