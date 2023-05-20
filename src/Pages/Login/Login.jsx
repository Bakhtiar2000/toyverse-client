import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigation } from 'react-router-dom';
import logo from '/assets/ToyVerse Logo.png'
import { FcGoogle } from 'react-icons/fc';
import { FaEye } from 'react-icons/fa';
import { AuthContext } from '../../Providers/AuthProvider';

const Login = () => {
    const { signIn, googleSignIn } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigation()
    const from = location.state?.from?.pathname || '/'

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [show, setShow]= useState(false)

    const handlePasswordToggle= ()=>{
        setShow(!show)
    }
    setError('')
    setSuccess('')
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
            .then(res => {
                const user = res.user
                console.log(user)
                setSuccess('Login successful')
                navigate(from, { replace: true })
            })
            .catch(err =>{
                console.log(err.message)
                if(err.message== 'Firebase: Error (auth/wrong-password).'){
                    setError('Password did not match')
                }                   
            })

        googleSignIn(email, password)
            .then(res => {
                const user = res.user
                console.log(user)
                setSuccess('Login successful')
                navigate(from, { replace: true })
            })
            .catch(err => console.log(err))
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <img className='w-12 rounded mb-10' src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-[400px] shadow-2xl bg-base-100">

                    <div className="card-body">
                        <h2 className='text-center text-2xl font-bold'>Sign in to your account</h2>
                        <form onSubmit={handleLogin}>
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
                                <FaEye onClick={handlePasswordToggle} className='absolute top-52 right-12 text-slate-500 hover:text-slate-700'/>
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
                        </form>
                        {error !== '' && <p className='text-red-500 text-xs mt-3 text-center'>{error}</p>}
                        
                        <div className="divider">OR</div>
                        <button className="btn btn-outline btn-primary"><span className='mr-2 text-xl'><FcGoogle /> </span> Continue with google</button>
                        {success !== '' && <p className='text-green-500 text-xs mt-3 text-center'>{success}</p>}
                        <p className='text-center mt-3'>Don't have an account? <Link to='/register'><span className='text-primary'>Register</span></Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;