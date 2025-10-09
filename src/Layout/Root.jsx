import React from 'react';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';
import {  Slide, ToastContainer } from 'react-toastify';
import Spinner from '../Components/Spinner';

const Root = () => {

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1   w-full '>
                <Outlet />
            </div>
            
            <Footer />
            <ToastContainer closeOnClick={true} 
                draggable
                pauseOnHover
                
                transition={Slide} />
        </div>
    );
};

export default Root;