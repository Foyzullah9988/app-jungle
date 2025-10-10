import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBorderAll, faHome, faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    const activeNav = ({ isActive }) => {
        return isActive ? 'text-[16px] text-fuchsia-600  font-semibold pb-1 border-b-2 ' : 'text-[14px]  font-semibold text-[15px]'
    }
    const dropActiveNav = ({ isActive }) => {
        return isActive ? ' border-b-1 text-fuchsia-600 pb-1' : '  font-semibold '
    }


    return (
        <div className='bg-base-100 shadow-sm mb-2'>
            <div className=" flex justify-between items-center py-3 bg-base-100 container mx-auto ">
                <div className="navbar-start ">
                    <div className="dropdown bg-base-300 rounded-xl">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content w-fit bg-base-100 rounded-box z-1 mt-3  p-2 shadow">
                            <li><NavLink to={'/'} className={dropActiveNav}>
                                <FontAwesomeIcon icon={faHome} />

                                Home</NavLink></li>
                            <li><NavLink to={'/apps'} className={dropActiveNav}>
                                <FontAwesomeIcon icon={faBorderAll} />

                                Apps</NavLink></li>
                            <li><NavLink to={'/installation'} className={dropActiveNav}>
                                <FontAwesomeIcon icon={faListCheck} />
                                Installation</NavLink></li>
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost text-2xl font-bold">
                        <img className='w-8' src="/logo.png" alt="" />App     <h2 className='text-fuchsia-600'>Jungle</h2></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'} className={activeNav}>
                            <FontAwesomeIcon icon={faHome} />
                            Home</NavLink></li>
                        <li><NavLink to={'/apps'} className={activeNav}>
                            <FontAwesomeIcon icon={faBorderAll} />
                            Apps</NavLink></li>
                        <li><NavLink to={'/installation'} className={activeNav}>
                            <FontAwesomeIcon icon={faListCheck} />
                            Installation</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href='https://github.com/Foyzullah9988' className="btn text-white bg-gradient-to-tl to-[#601ff7] via-[#45d0e5]  from-[#53f98d]">
                    <FontAwesomeIcon icon={faGithub}/>
                        
                        Contribute</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;