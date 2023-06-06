import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { user, createUser } = useContext(AuthContext)
    console.log(user, createUser)

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log(name, email, password, confirmPassword)
        if (confirmPassword !== password) {
            setError('Both Password did not match')
            setSuccess('')
            return
        }
        else if (confirmPassword.length < 6) {
            setError('Password must be 6 character')
            setSuccess('')
            return
        }
        else {
            setError('')
            setSuccess('Your SignUp is Successful')
        }

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log("Error:", error)
            })

    }
    return (
        <div className="min-h-screen hero bg-base-200">
            <div className="flex-col min-w-full hero-content">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Register</h1>
                </div>
                <form onSubmit={handleRegister} className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" name='confirmPassword' placeholder="confirm password" className="input input-bordered" required />
                        </div>
                        <div className="mt-6 form-control">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <div className='mx-auto mt-3'><span>Already Have Account? </span><Link to="/login" className='text-blue-500'>Login</Link></div>
                        <p className='text-red-500 '>{error} </p>
                        <p className='text-green-500 '>{success} </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;