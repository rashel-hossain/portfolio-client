import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [open, setOpen] = useState(false);

    const menuItems =
        <React.Fragment>
            <li><a href='#'>Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#testimonial">Testimonial</a></li>
            <li><a href="#contact">Contact</a></li>
        </React.Fragment>

    const handleOpen = () => {
        setOpen(!open);
    }

    return (
        <div className="navbar bg-gradient-to-r from-indigo-500 to-sky-700 flex justify-between">
            <div className="navbar-start">
                <div className="dropdown">
                    <label className="btn btn-circle swap swap-rotate lg:hidden z-50">
                        <input type="checkbox"/>
                        <svg onClick={handleOpen} className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
                        <svg onClick={handleOpen} className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
                    </label>
                    <ul tabIndex={1} className={`font-bold menu menu-compact uppercase dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-40 ${open || 'hidden'}`}>
                        {menuItems}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold"><span className='text-white uppercase'>Portfol</span> <span className='text-red-400'>io</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul tabIndex={0} className="menu menu-horizontal p-0 font-bold text-white uppercase">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;