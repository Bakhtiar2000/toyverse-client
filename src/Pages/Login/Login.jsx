import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/ToyVerse Logo.png'

const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <img className='w-12 rounded mb-10' src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-[400px] shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h2 className='text-center text-2xl font-bold'>Sign in to your account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <div className='flex items-center justify-start gap-2'>
                                    <input type="checkbox" className="w-3 h-3" />
                                    <p><small>Remember me</small></p>
                                </div>
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-center mt-3'>Don't have an account? <Link to='/register'><span className='text-primary'>Register</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;