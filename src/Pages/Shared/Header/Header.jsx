import React from 'react';
import logo from '/assets/ToyVerse Logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="navbar bg-base-200 rounded-b-lg py-3 max-w-7xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link>All Toys</Link></li>
                        <li><Link>Blogs</Link></li>
                    </ul>
                </div>
                <Link to='/'><img className='w-8 rounded-md ml-3' src={logo} alt="" /></Link>
                <div className='ml-5'>
                    <p className="normal-case text-2xl font-serif">Toy verse</p>
                    <p className='text-xs'>Explore your imagination</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link>All Toys</Link></li>
                    <li><Link>Blogs</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="mr-5 btn btn-ghost">Login</Link>
                <a className="btn mr-3">Get started</a>
            </div>
        </div>
    );
};

export default Header;