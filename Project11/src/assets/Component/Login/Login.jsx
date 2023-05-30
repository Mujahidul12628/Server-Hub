import React, { useState } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import DynamicTittle from '../Hook/DynamicTittle';

const auth = getAuth(app)

const Login = () => {
    DynamicTittle('login')

    const { loginUser } = useContext(AuthContext) || {};
    const location = useLocation();
    let navigate = useNavigate();


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (event) => {
        event.preventDefault();
        if ((email, password)) {
            loginUser(email, password)
                .then((result) => {
                    console.log(result.user);
                    navigate("/");
                })
                .catch((error) => {
                    console.log(error.message);
                });
        }
    };

    console.log(email, password)



    const [user, setUser] = useState()
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log('Login successful', loggedInUser);
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log('Error', error.message)
            })
    }
    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log('Login successful', loggedInUser);
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log('Error', error.message)
            })
    }
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log('Logout Successfully');
                setUser(null)
            })
            .catch(error => {
                console.log('Error', error.message)
            })
    }
    return (


        <div className='w-full max-w-6xl mx-auto mt-10 mb-10 p-5 md:p-0'>



            <div className="flex flex-col mx-auto w-full md:w-[40%] bg-white p-6 rounded-lg  box-shadow ">

                <form className="">
                    <h2 className="text-2xl font-bold mb-6 text-col">Login</h2>

                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder='Enter Your Email' className="w-full border-color p-3 rounded-md mb-5" />



                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder='Enter Your Password' className="w-full border-color p-3 rounded-md mb-5" />

                </form>



                {
                    user ?
                        <button onClick={handleGoogleSignOut} type="submit" className="w-full p-3 text-white font-semibold btn-bg rounded-md mb-6 ">Logout</button> :
                        <div>
                            <button onClick={handleLogin} type="submit" className="w-full p-3 py-4 text-lg text-white font-semibold btn-bg rounded-md mb-5 ">Login</button>

                            <p className='font-semibold text-lg text-gray-700 text-center mb-5'>or Login with</p>

                            <button onClick={handleGoogleSignIn} type="submit" className="w-full p-3 text-black font-semibold bg-white rounded-md mb-5 border-color ">
                                <div className='flex justify-center items-center'>
                                    <span><img className='w-8 h-8 mr-2' src="https://i.ibb.co/jLKH22g/google.png" alt="" /></span> <span>Google Login</span>
                                </div>
                            </button>
                            <button onClick={handleGithubSignIn} type="submit" className="w-full p-3 text-black font-semibold bg-white  rounded-md mb-5 border-color">
                                <div className='flex justify-center items-center'>
                                    <span><img className='w-8 h-8 mr-2' src="https://i.ibb.co/RbvcFXb/github.png" alt="" /></span> <span>Github Login</span>
                                </div>
                            </button>
                        </div>
                }

                <p className='mb-2 mt-4 text-center'>Do not have account? <Link to='/register' className='text-blue-600'>Register</Link></p>

            </div>

        </div>
    );
};

export default Login;