import React from 'react';
import log from './../../../public/logo.png';
import { Link } from 'react-router-dom';

const NavbarPage = () => {

    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to={'/Home'}><li><a>Home</a></li></Link>
                            <Link to={'/Doctos'}><li><a>Doctos</a></li></Link>
                            <Link to={'/Services'}><li><a>Services</a></li></Link>
                            <Link to={'/Blogs'}><li><a>Blogs</a></li></Link>
                            <Link to={'/Contact'}><li><a>Contact</a></li></Link>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"> <img src={log} /> </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <Link to={'/Home'}><li><a>Home</a></li></Link>
                        <Link to={'/Doctos'}><li><a>Doctos</a></li></Link>
                        <Link to={'/Services'}><li><a>Services</a></li></Link>
                        <Link to={'/Blogs'}><li><a>Blogs</a></li></Link>
                        <Link to={'/Contact'}><li><a>Contact</a></li></Link>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-sky-500">Book Appointment</a>
                </div>
            </div>
        </div>
    );
};

export default NavbarPage;