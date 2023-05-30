/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */


import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { updateProfile } from 'firebase/auth';
import DynamicTittle from '../Hook/DynamicTittle';


const Register = () => {
    DynamicTittle('register')
    const { registerUser, signInWithGoogle, signInWithGithub, logOut, user } = useContext(AuthContext);

    const navigate = useNavigate()
    const location = useLocation()

    const [userr, setUser] = useState()
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [photo, setPhoto] = useState("");
    const [success, setSuccess] = useState('');
    const [error, setError] = useState("");

    const handleRegistration = (event) => {
        event.preventDefault();


        console.log(name, email, password)
        if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)) {
            setError("password not valid!!! minimum 8 character(at least one letter and one number)");
            console.log("password tik nai")
            return;
        }
        if (name, email, password) {
            registerUser(name, email, password)
                .then((result) => {
                    console.log(result.user);
                    const loggedUser = result.user;
                    setSuccess("User Created Successfully")
                    setError('')

                    updateProfile(loggedUser, {
                        displayName: name,
                        photoURL: photo,
                    })
                })
                .catch((err) => {
                    console.log(err.message);
                    setError(err.message);
                    setSuccess("")
                });
        }
        else {
            setError("Please fill in all fields");
        }

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




    };

    return (
        <div className='w-full max-w-6xl mx-auto mt-10 mb-10 p-5 md:p-0'>
            <div className="flex flex-col mx-auto w-full md:w-[40%] bg-white p-6 rounded-lg  box-shadow ">

                <p className=' text-red-500'>{error}</p>
                <p className=' text-green-600'>{success}</p>

                <form className="">
                    <h2 className="text-2xl font-bold mb-6 text-col">Register</h2>

                    <input onChange={(e) => setName(e.target.value)} type="text" name="text" placeholder='Enter Your Name' className="w-full border-color p-3 rounded-md mb-5" required />

                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder='Enter Your Email' className="w-full border-color p-3 rounded-md mb-5" required />

                    <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder='Enter Your Password' className="w-full border-color p-3 rounded-md mb-5" />

                    <input onChange={(e) => setPhoto(e.target.value)} type="text" name="photoURL" placeholder='Profile Photo URL' className="w-full border-color p-3 rounded-md mb-5" />

                    <button onClick={handleRegistration} type="submit" className="w-full p-1 py-4 text-lg text-white font-semibold btn-bg rounded-md mb-5 ">Register</button>
                    <p className="p-2">
                        Already have an account? <Link className='text-blue-600' to='/login'>Login</Link>
                    </p>
                </form>



            </div >

        </div >
    );
};

export default Register;










