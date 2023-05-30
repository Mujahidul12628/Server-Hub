/* eslint-disable react/jsx-no-undef */

import logo from '../../images/logo.png'
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {

        logOut()
            .then()
            .catch(error => {
                console.error(error.message)
            })

    }

    return (
        <div className="w-full mx-auto text-black navbar max-w-7xl navbar-bg font-semibold" >

            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="p-2 mt-3 shadow menu menu-compact dropdown-content  rounded-box w-52 btn-bg  ">
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/'>Home</NavLink ></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/allToys'>All Toys</NavLink ></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/myToys'>My Toys</NavLink ></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/addAToy'> Add A Toy</NavLink ></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/blog'>Blogs</NavLink ></li>
                        {/* <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/login'>Login</NavLink ></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/register'>Register</NavLink ></li>
                        <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/view'>view</NavLink ></li> */}
                    </ul>
                </div>
                <Link to='/' className="text-2xl font-semibold "><span className='text-[#ffffff]'>
                    <img className="h-[60%] w-[60%] object-contain sm:h-[40%] sm:w-[40%] md:h-[50%] md:w-[50%]" src={logo} alt="" />

                </span></Link>
            </div>

            <div className="hidden navbar-center lg:flex">
                <ul className="gap-2 px-1 menu menu-horizontal">
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/'>Home</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/allToys'>All Toys</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/myToys'>My Toys</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/addAToy'> Add A Toy</NavLink></li>
                    <li><NavLink className={({ isActive, isPending }) => isActive ? "active-link" : isPending ? "pending" : ""} to='/blog'>Blogs</NavLink></li>
                </ul>
            </div>

            <div className="flex items-center navbar-end ">
                {
                    user && <div className="w-10 h-10 mr-5 rounded-full tooltip tooltip-bottom bg-purple-400" data-tip={user?.displayName}>
                        <img className='w-10 h-10 rounded-full' src={user?.photoURL} />
                    </div>
                }
                {
                    user ? <button onClick={handleLogOut} className="px-4 py-2 logged-in-out text-white rounded-md">
                        <Link to='/'>Log Out</Link>
                    </button>
                        : <button className="px-4 py-2 logged-in-out text-white rounded-md">
                            <Link to='/login'>Login</Link>
                        </button>
                }
            </div>

        </div>
    );
};

export default Navbar;

