import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }
    return (
        <div className="navbar bg-slate-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="menu menu-horizontal px-1">
                    <Link className='mx-2' to="/">Home</Link>
                    <Link className='mx-2' to="/login">Login</Link>
                    <Link className='mx-2' to="/register">Register</Link>
                </div>
            </div>

            {
                user ? <div>
                    <span> {user.email} </span> <button onClick={handleLogout} className=' mx-3 btn btn-xs bg-pink-500'> Signout</button>
                </div> : <Link to="/login"><button className=' mx-3 btn btn-xs bg-pink-500'>Login</button></Link>

            }
        </div>
    );
};

export default Navbar;