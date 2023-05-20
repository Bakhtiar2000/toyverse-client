import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/assets/ToyVerse Logo.png'
import { FaEye } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [show, setShow]= useState(false)
    const [success, setSuccess] = useState('')

    const handlePasswordToggle= ()=>{
        setShow(!show)
    }
    const handleRegister = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        setSuccess('')

        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser)
                setSuccess('Registration successful')
                updateProfile(createdUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        console.log('Profile Updated!')
                    })
                    .catch((error) => setError(error.message));
                form.reset()
            })
            .catch(err => setError(err.message))
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <img className='w-12 rounded mb-10' src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-[400px] shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h2 className='text-center text-2xl font-bold'>Sign up your account</h2>
                        <form onSubmit={handleRegister}>
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
                                <input type={show? 'text': 'password'} name="password" placeholder="password" className="input input-bordered relative" />
                                <FaEye onClick={handlePasswordToggle} className='absolute bottom-[190px] right-12 text-slate-500 hover:text-slate-700'/>
                                <div className='flex items-center justify-start gap-2 mt-2 mb-0'>
                                    <input type="checkbox" className="w-3 h-3" />
                                    <p><small>Terms and conditions</small></p>
                                </div>
                            </div>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <p className='text-center mt-3'>Already have an account? <Link to='/login'><span className='text-primary'>Login</span></Link></p>
                        {success !== '' && <p className='text-green-500 text-xs mt-3 text-center'>{success}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;