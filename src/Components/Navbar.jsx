import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {



    return (
       <div className='bg-base-100 shadow-sm mb-2'>
         <div className="navbar  bg-base-100 container mx-auto ">
            <div className="navbar-start ">
                <div className="dropdown bg-base-300 rounded-xl">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to={'/'} className='text-[14px] font-medium'>Home</NavLink></li>
                        <li><NavLink to={'/apps'} className='text-[14px] font-medium'>Apps</NavLink></li>
                        <li><NavLink to={'/installation'} className='text-[14px] font-medium'>Installation</NavLink></li>
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-2xl font-bold">
                <img className='w-8' src="/src/assets/logo.png" alt="" />App     <h2 className='text-fuchsia-800'>Jungle</h2></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to={'/'} className='text-[14px] font-semibold'>Home</NavLink></li>
                    <li><NavLink to={'/apps'} className='text-[14px] font-semibold'>Apps</NavLink></li>
                    <li><NavLink to={'/installation'} className='text-[14px] font-semibold'>Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/Foyzullah9988?tab=repositories' className="btn text-white bg-gradient-to-tl to-[#5a21df] via-[#913ec1] from-[#bd90fc]"> 
                    <img className='w-8 ' src="/src/assets/github-brands-solid-full.svg" alt="" /> Contribute</a>
            </div>
        </div>
       </div>
    );
};

export default Navbar;