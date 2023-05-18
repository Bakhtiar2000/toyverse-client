import React from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/ToyVerse Logo.png'

const Register = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <img className='w-12 rounded mb-10' src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-[400px] shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h2 className='text-center text-2xl font-bold'>Sign up your account</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your PhotoURL</span>
                            </label>
                            <input type="text" name="photo" placeholder="photoURL" className="input input-bordered" />
                        </div>
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
                            <div className='flex items-center justify-start gap-2 mt-2 mb-0'>
                                <input type="checkbox" className="w-3 h-3" />
                                <p><small>Terms and conditions</small></p>
                            </div>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Register</button>
                        </div>
                        <p className='text-center mt-3'>Already have an account? <Link to='/login'><span className='text-primary'>Login</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;